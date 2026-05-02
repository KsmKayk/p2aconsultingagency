import ServiceCard from './ServiceCard';
import { SiN8N } from "react-icons/si"
import { TbBrowserPlus } from "react-icons/tb";
import { FaWandMagicSparkles } from "react-icons/fa6";

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
          Nossos Serviços
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          <ServiceCard
            icon={<SiN8N className="h-8 w-8 text-red-600" />}
            title="Atendimento Inteligente com Agentes de IA"
            description='Não é apenas um robô de “digite 1”. Implantamos agentes de inteligência artificial capazes de conversar naturalmente em chats, fazer atendimentos, organizar agendas, qualificar leads e, ainda, estarem integrados com diversos sistemas.'
          />
          <ServiceCard
            icon={<TbBrowserPlus className="h-8 w-8 text-green-600" />}
            title="Presença Digital: Landing Pages de Alta Performance"
            description="De nada adianta automatizar o atendimento se sua vitrine não converte. Desenvolvemos Landing Pages profissionais, rápidas e otimizadas para SEO, focadas em transformar visitantes em clientes reais."
          />
          <ServiceCard
            icon={<FaWandMagicSparkles className="h-8 w-8 text-purple-600" />}
            title="Automação de Processos e Integrações Customizadas"
            description="O seu negócio funcionando 24/7, tornar tarefas complexas ou repetitivas em automatizadas e fazendo integrações com planilhas ou com sistemas. Podemos acrescentar no final, ajustando o “e” e devidas pontuações: “e liberar a mão de obra humana para agregar valor em outras demandas e evitando dispersões."
          />
        </div>
      </div>
    </section>
  );
}