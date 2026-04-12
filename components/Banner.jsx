import banner from '../public/banner.png';

export default function Banner() {
  return (
    <section className="relative min-h-[600px] h-[70vh] max-h-[800px] bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={banner.src}
          alt="Tecnologia e inovação - Escritório moderno com equipe colaborando"
          className="w-full h-full object-cover opacity-85"
        />
      </div>
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="relative h-full flex items-center text-white text-center p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Transforme seu negócio com automação e IA inteligente
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Soluções personalizadas de chatbot e automação para WhatsApp que aumentam sua eficiência e melhoram a experiência do cliente
          </p>
          <a href="#agendar" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.02] inline-flex items-center">
            Agende sua Consulta Gratuita
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}