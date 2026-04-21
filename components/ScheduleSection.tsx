import { useState } from 'react';

export default function ScheduleSection() {
  function formatDateForInput(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function getWhatsAppLink(date: Date, time: string): string {
    // Replace with actual WhatsApp number
    const phoneNumber = "5521983695022"; // Updated number from UPDATE_CLAUDE.md
    const message = encodeURIComponent(`Olá, gostaria de agendar uma consulta para o dia ${date.toLocaleDateString('pt-BR')} às ${time}.`);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  }

  const [selectedDate, setSelectedDate] = useState<string>(formatDateForInput(new Date()));
  const [selectedTime, setSelectedTime] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedDate || !selectedTime) {
      alert('Por favor, selecione uma data e horário.');
      return;
    }

    const selectedDateObj = new Date(selectedDate);
    const [hours, minutes] = selectedTime.split(':').map(Number);
    const selectedDateTime = new Date(selectedDate);
    selectedDateTime.setHours(hours, minutes, 0, 0);
    const now = new Date();

    // Check if selected time is in the past for today
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDateOnly = new Date(selectedDate);
    selectedDateOnly.setHours(0, 0, 0, 0);

    const isToday = selectedDateOnly.getTime() === today.getTime();

    if (isToday && selectedDateTime < now) {
      alert('Não é possível agendar para horários que já passaram.');
      return;
    }

    const whatsappLink = getWhatsAppLink(selectedDateObj, selectedTime);
    window.open(whatsappLink, '_blank');
  };

  return (
    <section id="agendar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
          Agende uma Consulta
        </h2>
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Selecione data e horário para agendamento
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="date"
                id="datePicker"
                className="w-full max-w-xs px-4 py-2 border text-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
              <select
                id="timeSelect"
                className="w-full max-w-xs px-4 py-2 border text-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value="">Selecione o horário</option>
                {[...Array(11)].map((_, i) => i + 8).map(hour => (
                  <option key={hour} value={`${hour.toString().padStart(2, '0')}:00`}>
                    {hour}h
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="w-full max-w-xs bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 transform hover:scale-[1.05]"
              >
                Agendar Consulta
              </button>
            </form>
            <p className="mt-4 text-gray-600 text-sm">
              Horários disponíveis: todos os dias, das 8h às 18h.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}