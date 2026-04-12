export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Sobre Nós
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              A P2A Consulting Agency é especializada em ajudar empresas a alcançar seus objetivos de negócios por meio de automação e inteligência artificial aplicada a chats como WhatsApp. Nossa missão é transformar a comunicação empresarial, tornando-a mais eficiente, personalizada e acessível 24/7.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Com anos de experiência em tecnologia e atendimento ao cliente, desenvolvemos soluções que não apenas automatizam processos, mas também geram insights valiosos para tomada de decisões estratégicas. Nossa equipe combina expertise técnica com compreensão profunda das necessidades do mercado brasileiro.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-start bg-blue-50 p-6 rounded-lg shadow-sm">
              <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-md flex items-center justify-center">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.1 0-2 .9-2 2s1 2 2 2 2-.9 2-2-1-2-2-2zm0 2a.5.5 0 01-.5-.5h-1a.5.5 0 010-1h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 010-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 010-.5h1a.5.5 0 01.5.5z"></path>
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-800">Missão</h3>
                <p className="text-sm text-gray-600">
                  Empoderar empresas com soluções de automação e IA que melhoram a eficiência operacional e a satisfação do cliente.
                </p>
              </div>
            </div>
            <div className="flex items-start bg-blue-50 p-6 rounded-lg shadow-sm">
              <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-md flex items-center justify-center">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-800">Visão</h3>
                <p className="text-sm text-gray-600">
                  Ser referência global em inovação para atendimento ao cliente, reconhecida pela qualidade de nossas soluções e pelo impacto positivo nos negócios de nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}