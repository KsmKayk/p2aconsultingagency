# CLAUDE.md - P2A Consulting Agency

## O que é esse produto?

Landing Page para a agência de consultoria P2A, especializada em ajudar empresas a alcançar seus objetivos de negócios por meio de automação e inteligência artificial para chats como WhatsApp.

A landing page apresenta os serviços oferecidos pela P2A, incluindo automação de atendimento ao cliente, integração de chatbots e soluções personalizadas para melhorar a eficiência e a experiência do cliente.

## Stack Obrigatória

- Next.js
- Tailwind CSS
- 
## Fluxo do Produto

1. O usuário acessa a landing page da P2A Consulting Agency.
2. O usuário navega pela pagina de cima a baixo, conhecendo a empresa, seus serviços e casos de sucesso na seguinte ordem:
   1. Header com o nome da empresa e um menu de navegação.
      1. Logo da empresa.
      2. Menu de navegação com links para as seções: "Sobre Nós", "Serviços", "Agende uma Consulta".
  2. Banner principal com uma imagem de fundo relacionada à tecnologia e um texto chamativo que destaca os benefícios dos serviços da P2A.
  3. Seção "Sobre Nós" com uma breve descrição da empresa, sua missão e visão.
  4. Seção "Serviços" com   
     1. 3 Cards destacando o que a empresa oferece, como "Automação de Atendimento", "Integração de Chatbots" e "Soluções Personalizadas".
        1. Cada card deve conter um ícone representativo, um título e uma breve descrição do serviço.
        2. Exemplo de conteúdo para os cards:
           - Automação de Atendimento: "Melhore a eficiência do seu atendimento ao cliente com nossas soluções de automação." [Icone n8n]
           - Integração de Chatbots: "Integre chatbots inteligentes para oferecer suporte 24/7 aos seus clientes." [Icone ChatGPT]
           - Soluções Personalizadas: "Desenvolvemos soluções personalizadas para atender às necessidades específicas do seu negócio." [ Icone Lapis ]
  5. Seção "Agende uma Consulta" com um pequeno calendario da semana atual com botões para cada hora [seg-sab 8h-18h] para o usuário escolher um horário para agendar uma consulta com a equipe da P2A.
     1. Cada botão deve ser clicável e levar para uma mensagem pré-formatada no WhatsApp, onde o usuário pode confirmar o agendamento da consulta.
  6. Footer com informações de contato e links para redes sociais.

## Deploy

A landing page será hospedada no github pages, então o projeto deve ser convertido em uma pagina estatica e os arquivos gerados devem ser colocados na branch `gh-pages` do repositório.

## Imagens/arquivos publicos

- Os icones para os cards devem ser obtidos de uma biblioteca de ícones gratuita, como Font Awesome ou Material Icons. Alternativamente, SVGs embutidos podem ser usados para garantir funcionamento imediato.
- Imagem de fundo para o banner principal: ./public/banner.png (uma imagem relacionada à tecnologia e inovação, como um escritório moderno com computadores ou uma equipe de trabalho colaborando).
- Logo da empresa: ./public/logo.jpg (um logo simples e moderno que represente a P2A Consulting Agency, utilizando as cores azul e branco para transmitir confiança e profissionalismo).
- Número de WhatsApp para agendamento: deixar como placeholder a ser configurado em produção.

## Commits
- O commit deve ser feito a cada etapa concluída do desenvolvimento da landing page, seguindo a ordem do fluxo do produto.
- Cada commit deve conter uma mensagem clara e descritiva do que foi implementado.
- O commit deve possuir os prefixos corretos para cada etapa, como "feat: ", "fix: ", "docs: ", etc., para facilitar a identificação das mudanças realizadas no projeto.
- Para configurar o export estático para GitHub Pages, adicione `output: 'export'` no `next.config.js`. Após o build, os arquivos estáticos estarão na pasta `out/` e devem ser pusheed para a branch `gh-pages`.

## Readme
O README do projeto deve conter as seguintes informações:
- Descrição do projeto e seus objetivos.
- Instruções de instalação e execução do projeto localmente.
- Instruções para o deploy da landing page no GitHub Pages.
- Informações sobre a estrutura do projeto e as tecnologias utilizadas.

## O que NÃO fazer
- Não utilizar banco de dados
- Não utilizar autenticação de usuário
- Não commitar arquivos desnecessários, como arquivos de configuração local ou arquivos de build.
- Não commitar .env ou arquivos que contenham informações sensíveis.