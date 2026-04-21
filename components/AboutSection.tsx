import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { UserIcon, EyeIcon } from '@heroicons/react/24/solid';

import func1 from '../public/func1.jpg';
import func2 from '../public/func2.jpg';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Sobre Nós
        </h2>
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          loop
          pagination={{ clickable: true }}
          className="my-4 about-swiper"
        >
          {/* Slide 1: Company Information */}
          <SwiperSlide>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  A P2A Consulting Agency nasceu para eliminar o gargalo do atendimento humano em empresas que querem crescer. Não entregamos apenas "respostas automáticas"; desenvolvemos Ecossistemas de Automação utilizando Inteligência Artificial e agentes inteligentes que compreendem o contexto do seu cliente.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Combinamos o poder de ferramentas como n8n e os principais LLMs do mercado para transformar o seu WhatsApp em uma máquina de vendas e suporte técnico, gerando eficiência operacional e dados estratégicos para o seu negócio.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start bg-blue-50 p-6 rounded-lg shadow-sm">
                  <div className="shrink-0 h-10 w-10 bg-blue-100 rounded-md flex items-center justify-center">
                    <UserIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">Missão</h3>
                    <p className="text-sm text-gray-600">
                      Democratizar o acesso à IA de ponta, permitindo que pequenos e médios negócios tenham a eficiência de grandes corporações através da automação inteligente.
                    </p>
                  </div>
                </div>
                <div className="flex items-start bg-blue-50 p-6 rounded-lg shadow-sm">
                  <div className="shrink-0 h-10 w-10 bg-blue-100 rounded-md flex items-center justify-center">
                    <EyeIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">Visão</h3>
                    <p className="text-sm text-gray-600">
                      Ser o principal parceiro tecnológico de empresas brasileiras na transição para uma economia movida por Agentes de IA.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2: Employee 1 */}
          <SwiperSlide>
            <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto px-2">
              <div className="w-full max-w-xs sm:max-w-sm h-56 sm:h-64 mx-auto md:mx-0 overflow-hidden rounded-xl shadow-sm">
                <img
                  src={func1.src}
                  alt="Funcionário 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left space-y-3">
                <h3 className="text-xl font-bold text-gray-800">Nome do Funcionário 1</h3>
                <p className="text-lg text-gray-600">Cargo na P2A Consulting</p>
                <p className="text-gray-600 leading-relaxed">
                  Descrição breve do funcionário 1, incluindo sua experiência, especialidades e contribuição para a equipe.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3: Employee 2 */}
          <SwiperSlide>
            <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto px-2">
              <div className="w-full max-w-xs sm:max-w-sm h-56 sm:h-64 mx-auto md:mx-0 overflow-hidden rounded-xl shadow-sm">
                <img
                  src={func2.src}
                  alt="Funcionário 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left space-y-3">
                <h3 className="text-xl font-bold text-gray-800">Nome do Funcionário 2</h3>
                <p className="text-lg text-gray-600">Cargo na P2A Consulting</p>
                <p className="text-gray-600 leading-relaxed">
                  Descrição breve do funcionário 2, incluindo sua experiência, especialidades e contribuição para a equipe.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}