import Link from 'next/link';
import { useState } from 'react';
import logo from '../public/logo.jpg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <img
                src={logo.src}
                alt="P2A Consulting Agency Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="#sobre" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Sobre Nós
            </Link>
            <Link href="#servicos" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Serviços
            </Link>
            <Link href="#agendar" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Agende uma Consulta
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Abrir menu"
            >
              ☰ Menu
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} px-2 pt-2 pb-3 space-y-1`}
        >
          <Link
            href="#sobre"
            className="block text-gray-900 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
          >
            Sobre Nós
          </Link>
          <Link
            href="#servicos"
            className="block text-gray-900 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
          >
            Serviços
          </Link>
          <Link
            href="#agendar"
            className="block text-gray-900 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
          >
            Agende uma Consulta
          </Link>
        </div>
      </div>
    </header>
  );
}