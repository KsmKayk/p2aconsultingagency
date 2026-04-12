import { useState, useEffect } from 'react';

export default function ScheduleSection() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    generateWeekSchedule();
  }, []);

  function generateWeekSchedule() {
    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const today = new Date();

    // Começa na segunda-feira da semana atual
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay() + 1); // Segunda-feira

    // Se hoje é domingo, começa na próxima segunda
    if (today.getDay() === 0) {
      startOfWeek.setDate(today.getDate() + 1);
    }

    const weekDays = [];

    // Gera segunda a sábado (6 dias)
    for (let i = 0; i < 6; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);

      const dayName = days[day.getDay()];
      const formattedDate = day.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' });

      const hours = [];
      for (let h = 8; h <= 18; h++) {
        const timeString = `${h.toString().padStart(2, '0')}:00`;
        const hourDate = new Date(day);
        hourDate.setHours(h, 0, 0, 0);

        // Verifica se o horário já passou (para desativar horários passados)
        const isPast = hourDate < new Date().setHours(0, 0, 0, 0);

        hours.push({
          time: timeString,
          displayTime: `${h}h`,
          date: day,
          dayName,
          formattedDate,
          isPast: isPast && day.toDateString() === new Date().toDateString() // Só desativa se for hoje e horário passado
        });
      }

      weekDays.push({
        dayName,
        formattedDate,
        date: day,
        hours,
        isToday: day.toDateString() === new Date().toDateString()
      });
    }

    setSchedule(weekDays);
  }

  function getWhatsAppLink(date, time) {
    // Replace with actual WhatsApp number
    const phoneNumber = "5511999999999"; // Example Brazilian number
    const message = encodeURIComponent(`Olá, gostaria de agendar uma consulta para o dia ${date.toLocaleDateString('pt-BR')} às ${time}.`);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  }

  if (schedule.length === 0) {
    return <div className="py-20 text-center">Carregando horários...</div>;
  }

  return (
    <section id="agendar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
          Agende uma Consulta
        </h2>
        <div className="space-y-8">
          {schedule.map((day, dayIndex) => (
            <div key={dayIndex}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className={day.isToday ? 'text-blue-600' : 'text-gray-800'}>
                  {day.dayName}, {day.formattedDate}
                </span>
                {day.isToday && <span className="ml-2 h-4 w-4 bg-blue-600 rounded-full animate-pulse" />}
              </h3>
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {day.hours.map((hour, hourIndex) => (
                  <a
                    key={hourIndex}
                    href={!hour.isPast && getWhatsAppLink(day.date, hour.time)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block
                    ${hour.isPast ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-blue-50 hover:bg-blue-100 text-blue-800 font-medium py-2 px-3 rounded-lg text-center transition-all duration-200 transform hover:scale-[1.05] border border-blue-200 hover:border-blue-300'}`}
                  >
                    {hour.displayTime}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-gray-600 text-sm">
          Os links abrem uma conversa pré-formatada no WhatsApp para agendamento.
          <br />
          Horários disponíveis: Segunda a Sábado, das 8h às 18h.
          <br />
          Horários em cinza já passaram e não estão disponíveis.
        </p>
      </div>
    </section>
  );
}