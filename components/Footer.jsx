export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">P2A Consulting Agency</h3>
            <p className="text-sm leading-relaxed">
              Especializada em automação e inteligência artificial para chats como WhatsApp, ajudando empresas a alcançar seus objetivos de negócios com eficiência e inovação.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contato</h3>
            <p className="text-sm">
              <span className="block">Telefone: (11) 99999-9999</span>
              <span className="block mt-1">Email: contato@p2aconsulting.com.br</span>
              <span className="block mt-1">Endereço: Rua das Flores, 123 - São Paulo, SP</span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h3>
            <nav className="space-y-3">
              <a href="#sobre" className="block hover:text-blue-400 transition-colors duration-200">Sobre Nós</a>
              <a href="#servicos" className="block hover:text-blue-400 transition-colors duration-200">Serviços</a>
              <a href="#agendar" className="block hover:text-blue-400 transition-colors duration-200">Agende uma Consulta</a>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Redes Sociais</h3>
            <div className="flex space-x-5">
              <a href="#" className="hover:text-blue-400 transition-colors duration-200 flex items-center justify-center">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-20.35C1.404 0 0 1.404 0 3.143v17.714C0 22.596 1.404 24 2.325 24h9.09v-9.256h-3.728v-2.603h3.728v-2.24c0-2.457 1.551-4.05 3.778-4.05 1.08 0 2.04.08 2.242.11v2.563h-1.506c-1.32 0-1.604.584-1.604 1.484v2.05h2.378l-.367 2.603h-2.011v9.256h3.888c1.252 0 2.256-.969 2.256-2.154V3.143C24.931 1.404 23.527 0 22.675 0z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200 flex items-center justify-center">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 2.953a8.958 8.958 0 01-2.623.712 4.478 4.478 0 001.959-2.464 8.937 8.937 0 01-2.836 1.06 4.47 4.47 0 00-7.64 4.078A12.91 12.91 0 014.25 2.08a4.47 4.47 0 00-1.417 5.944 4.47 4.47 0 01-1.972-.51v.057a4.47 4.47 0 003.565 4.387 4.42 4.42 0 01-1.97-.176a4.42 4.42 0 004.173 3.087A8.93 8.93 0 011.564 14.56a8.933 8.933 0 01-.274.05A8.93 8.93 0 0012.62 22.17a12.955 12.955 0 01-8.006 4.342c-.523.243-1.074.37-1.65.37a12.92 12.92 0 01-8.85-3.06A8.94 8.94 0 003.56 14.017a8.92 8.92 0 006.283 1.82 8.925 8.925 0 01-4.076-.513 8.922 8.922 0 008.244 2.014A4.466 4.466 0 0122.887 10.08a8.94 8.94 0 002.534-.782 4.46 4.46 0 001.24-5.585C23.995 6.107 24 4.528 24 2.953z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200 flex items-center justify-center">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 0a6 6 0 01-6 6c0 2.761-1.143 5.149-2.872 6.27l2.085.707a4.008 4.008 0 005.002-4.07 6 6 0 01-6.215-2.837z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          © {new Date().getFullYear()} P2A Consulting Agency. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}