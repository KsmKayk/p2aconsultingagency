import ServiceCard from './ServiceCard';
import { Cog6ToothIcon, ChatBubbleLeftRightIcon, PencilIcon } from '@heroicons/react/24/solid';

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
          Nossos Serviços
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          <ServiceCard
            icon={<Cog6ToothIcon className="h-8 w-8 text-blue-600" />}
            title="Automação de Atendimento"
            description="Melhore a eficiência do seu atendimento ao cliente com nossas soluções de automação."
          />
          <ServiceCard
            icon={<ChatBubbleLeftRightIcon className="h-8 w-8 text-green-600" />}
            title="Integração de Chatbots"
            description="Integre chatbots inteligentes para oferecer suporte 24/7 aos seus clientes."
          />
          <ServiceCard
            icon={<PencilIcon className="h-8 w-8 text-purple-600" />}
            title="Soluções Personalizadas"
            description="Desenvolvemos soluções personalizadas para atender às necessidades específicas do seu negócio."
          />
        </div>
      </div>
    </section>
  );
}