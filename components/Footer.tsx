import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

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
              <span className="block">Telefone: +55 21 983695022</span>
              <span className="block mt-1">Email: p2aconsultingagency@gmail.com</span>
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
              <a href="https://www.instagram.com/p2aconsultingagency/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200 flex items-center justify-center">
                <FaInstagram className="h-8 w-8" />
              </a>
              <a href="https://www.linkedin.com/company/p2a-consulting-agency/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200 flex items-center justify-center">
                <FaLinkedinIn className="h-8 w-8" />
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