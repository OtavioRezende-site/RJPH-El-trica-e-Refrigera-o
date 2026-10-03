export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  name: string;
  shortDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  badge: string;
  featured: boolean;
  intro: string[];
  reasons: {
    title: string;
    description: string;
  }[];
  scope: string[];
  precautions: string[];
  faq: ServiceFaq[];
  relatedSlugs: string[];
  metaTitle: string;
  metaDescription: string;
  illustrationType: 'air_conditioning' | 'refrigeration' | 'electrical';
}

export const SERVICES_DATA: Record<string, ServiceDetail> = {
  'instalacao-ar-condicionado': {
    slug: 'instalacao-ar-condicionado',
    name: 'Instalação de Ar-Condicionado',
    shortDescription: 'Instalação técnica e cuidadosa de equipamentos de ar-condicionado para garantir o funcionamento correto e seguro no seu ambiente.',
    heroTitle: 'Instalação de Ar-Condicionado',
    heroSubtitle: 'Execução técnica cuidadosa com atenção a fixação, tubulações, circuitos elétricos e eficiência operacional.',
    badge: 'Serviço em Destaque',
    featured: true,
    intro: [
      'A instalação de um aparelho de ar-condicionado exige conhecimento prático de refrigeração e eletricidade para que o equipamento opere de forma estável, segura e atinja o rendimento esperado para o ambiente.',
      'Na RJPH Elétrica e Refrigeração, o atendimento é conduzido de forma direta pelo profissional Rafael Santos, avaliando as características do local e as orientações dos fabricantes para uma fixação firme e ligações corretas.'
    ],
    reasons: [
      {
        title: 'Fixação firme e segura das unidades',
        description: 'Tanto a evaporadora interna quanto a condensadora externa necessitam de ancoragem resistente para evitar vibrações excessivas e ruídos no dia a dia.'
      },
      {
        title: 'Conexão adequada das linhas frigoríficas',
        description: 'Tubulações de cobre com isolamento térmico correto e aperto preciso nas conexões para preservar o fluido refrigerante do sistema.'
      },
      {
        title: 'Adequação ao ponto de energia',
        description: 'Verificação do circuito elétrico dedicado, disjuntor apropriado e cabeamento seguro para alimentar a unidade sem sobrecargas.'
      },
      {
        title: 'Drenagem e escoamento da condensação',
        description: 'Caimento adequado da mangueira de dreno para evitar gotejamentos indesejados nas paredes ou no piso interno.'
      }
    ],
    scope: [
      'Posicionamento e fixação da unidade evaporadora e condensadora',
      'Passagem e isolamento da tubulação frigorífica compatível',
      'Conexão elétrica entre as unidades e alimentação do sistema',
      'Teste de funcionamento em ciclo de resfriamento e vazão de ar',
      'Orientações básicas de uso e acionamento pelo controle'
    ],
    precautions: [
      'Escolha de parede estruturalmente estável e livre de tubulações ocultas de água ou gás',
      'Respeito às distâncias mínimas de circulação de ar recomendadas para a condensadora',
      'Atenção ao desnível necessário para escoamento natural do dreno'
    ],
    faq: [
      {
        question: 'Como solicitar a instalação de um ar-condicionado?',
        answer: 'Você pode entrar em contato com a RJPH pelo formulário no site ou pelo chat online. Basta informar o modelo do aparelho e as características do local.'
      },
      {
        question: 'Preciso já ter comprado o aparelho antes de chamar?',
        answer: 'Sim, você pode entrar em contato com o aparelho já adquirido ou antes da compra caso deseje alinhar detalhes sobre o ponto elétrico e o espaço disponível.'
      },
      {
        question: 'Como saber se o local está preparado para receber o equipamento?',
        answer: 'É importante avaliar se há ponto elétrico adequado por perto, parede livre para suporte e trajeto viável para a tubulação externa. Caso tenha dúvidas, envie os detalhes pelo formulário ou inicie uma conversa no chat.'
      },
      {
        question: 'Vocês realizam a avaliação do serviço antes da execução?',
        answer: 'Sim, o alinhamento inicial é feito diretamente com a RJPH para entender o modelo, a distância entre as unidades e as condições do imóvel.'
      }
    ],
    relatedSlugs: ['refrigeracao', 'servicos-eletricos'],
    metaTitle: 'Instalação de Ar-Condicionado | RJPH Elétrica e Refrigeração',
    metaDescription: 'Instalação de ar-condicionado com atendimento direto e profissional. Conheça o serviço da RJPH Elétrica e Refrigeração e solicite seu orçamento.',
    illustrationType: 'air_conditioning'
  },
  'refrigeracao': {
    slug: 'refrigeracao',
    name: 'Refrigeração',
    shortDescription: 'Serviços e suporte técnico para sistemas de refrigeração e climatização, com avaliação das necessidades de cada equipamento.',
    heroTitle: 'Serviços de Refrigeração',
    heroSubtitle: 'Diagnóstico e assistência para equipamentos e circuitos de refrigeração com atendimento técnico e transparente.',
    badge: 'Atendimento Especializado',
    featured: false,
    intro: [
      'Os sistemas de refrigeração dependem do equilíbrio preciso entre compressores, trocadores de calor, válvulas e fluidos refrigerantes para operar com a temperatura adequada e manter a eficiência.',
      'A RJPH oferece atendimento em serviços de refrigeração, identificando sintomas como perda de rendimento, ruídos anormais ou falhas de funcionamento para propor o reparo ou ajuste técnico mais adequado.'
    ],
    reasons: [
      {
        title: 'Verificação do ciclo frigorífico',
        description: 'Análise de pressões e temperaturas de operação para entender se o equipamento está realizando a troca de calor de maneira equilibrada.'
      },
      {
        title: 'Identificação de vazamentos ou perdas',
        description: 'Vistoria cuidadosa das conexões e soldas para localizar possíveis pontos de perda de fluido refrigerante no sistema.'
      },
      {
        title: 'Inspeção mecânica e elétrica do compressor',
        description: 'Checagem de partida, corrente elétrica e funcionamento dos componentes de acionamento do motor.'
      },
      {
        title: 'Ajuste de controle térmico',
        description: 'Verificação de sensores, termostatos e comandos de acionamento para garantir que a temperatura permaneça estável.'
      }
    ],
    scope: [
      'Avaliação técnica do comportamento térmico do equipamento',
      'Verificação de pressões de alta e baixa do fluido refrigerante',
      'Diagnóstico de ruídos, vibrações e bloqueios mecânicos',
      'Reparos pontuais em conexões, tubulações e componentes elétricos de comando',
      'Testes pós-intervenção para assegurar estabilidade de funcionamento'
    ],
    precautions: [
      'Nunca forçar o equipamento a operar continuamente quando houver congelamento ou ruído estranho',
      'Manter as áreas de dissipação e ventilação livres de obstruções e poeira espessa',
      'Entrar em contato para avaliação assim que notar alteração no resfriamento'
    ],
    faq: [
      {
        question: 'Quais tipos de situações em refrigeração a RJPH atende?',
        answer: 'Atendemos demandas de refrigeração e climatização residencial e comercial leve. Entre em contato e informe a marca e o problema apresentado pelo seu equipamento.'
      },
      {
        question: 'Como funciona o primeiro contato para serviços de refrigeração?',
        answer: 'Você pode preencher o formulário no site ou iniciar uma conversa no chat online detalhando o que está acontecendo (ex.: não gela, faz barulho ou desarma o disjuntor).'
      },
      {
        question: 'Posso descrever os dados do equipamento?',
        answer: 'Sim, informe a marca, modelo e sintomas no formulário ou pelo chat online para que a equipe compreenda o caso previamente.'
      }
    ],
    relatedSlugs: ['instalacao-ar-condicionado', 'servicos-eletricos'],
    metaTitle: 'Serviços de Refrigeração | RJPH Elétrica e Refrigeração',
    metaDescription: 'Serviços de refrigeração técnica com atendimento direto da RJPH. Diagnóstico, suporte e avaliação para sistemas de refrigeração.',
    illustrationType: 'refrigeration'
  },
  'servicos-eletricos': {
    slug: 'servicos-eletricos',
    name: 'Serviços Elétricos',
    shortDescription: 'Instalações, revisões e manutenções elétricas com foco em segurança técnica, proteção de circuitos e prevenção de riscos.',
    heroTitle: 'Serviços Elétricos',
    heroSubtitle: 'Execução técnica em instalações, quadros de distribuição, cabeamentos e adequações para residências e comércios.',
    badge: 'Segurança & Prática',
    featured: false,
    intro: [
      'Uma rede elétrica bem executada é o pilar fundamental para o funcionamento de aparelhos de climatização, eletrodomésticos e equipamentos diários, garantindo conforto e segurança patrimonial.',
      'A RJPH Elétrica e Refrigeração realiza serviços elétricos com critérios práticos de proteção: dimensionamento correto de fiação, disjuntores compatíveis e distribuição equilibrada de cargas.'
    ],
    reasons: [
      {
        title: 'Proteção contra aquecimento e sobrecargas',
        description: 'Circuitos elétricos com bitola de cabo proporcional ao consumo das cargas instaladas, prevenindo quedas de tensão e riscos.'
      },
      {
        title: 'Revisão e montagem de quadros de distribuição',
        description: 'Organização de barramentos, identificação de circuitos e instalação de dispositivos de proteção como disjuntores adequados.'
      },
      {
        title: 'Pontos dedicados para equipamentos de maior potência',
        description: 'Criação e extensão de pontos específicos para ar-condicionado, fornos e equipamentos que exigem fiação exclusiva.'
      },
      {
        title: 'Identificação e correção de falhas de energia',
        description: 'Localização de mau contato, tomadas inoperantes, desarmes intermitentes de disjuntores e fugas pontuais.'
      }
    ],
    scope: [
      'Instalação de tomadas, interruptores e pontos de força dedicados',
      'Passagem e substituição de condutores e fiação com isolamento seguro',
      'Instalação e substituição de disjuntores em quadros de distribuição',
      'Adequação de circuitos elétricos para novos aparelhos de ar-condicionado',
      'Testes de continuidade, aterramento e tensão nos pontos atendidos'
    ],
    precautions: [
      'Evitar o uso de adaptadores e extensões permanentes para aparelhos de alta potência',
      'Não substituir disjuntores que desarmam por modelos maiores sem verificar a fiação',
      'Desligar o disjuntor geral imediatamente em caso de cheiro de queimado ou faíscas'
    ],
    faq: [
      {
        question: 'Vocês preparam o ponto elétrico para instalação de ar-condicionado?',
        answer: 'Sim, a RJPH atua tanto na parte elétrica quanto na climatização, permitindo preparar o circuito e disjuntor dedicados para o seu aparelho.'
      },
      {
        question: 'Como solicitar um serviço elétrico com a RJPH?',
        answer: 'Basta preencher o formulário no site ou abrir uma conversa no chat online informando qual serviço você precisa (como instalação de tomada especial, troca de disjuntor ou revisão do quadro).'
      },
      {
        question: 'É possível agendar a visita técnica?',
        answer: 'Sim, o dia e horário do atendimento são combinados diretamente pela equipe com base na sua solicitação, dentro do horário de funcionamento (09:00 às 18:00 todos os dias).'
      }
    ],
    relatedSlugs: ['instalacao-ar-condicionado', 'refrigeracao'],
    metaTitle: 'Serviços Elétricos | RJPH Elétrica e Refrigeração',
    metaDescription: 'Serviços elétricos profissionais com a RJPH Elétrica e Refrigeração. Instalações, fiação, quadros de distribuição e adequações seguras.',
    illustrationType: 'electrical'
  }
};

export const SERVICES_LIST: ServiceDetail[] = Object.values(SERVICES_DATA);
