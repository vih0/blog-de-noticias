export interface NewsItem {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  publishedAt: string
  author: string
  category: string
  readTime: string
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    slug: "inteligencia-artificial-revoluciona-medicina",
    title: "Inteligência Artificial Revoluciona Diagnósticos Médicos",
    excerpt: "Nova tecnologia de IA consegue detectar doenças com 95% de precisão, superando métodos tradicionais.",
    content: `
    A inteligência artificial está transformando radicalmente o campo da medicina, especialmente no que se refere aos diagnósticos médicos. Uma nova pesquisa publicada na revista Nature Medicine demonstra que algoritmos de aprendizado de máquina conseguem detectar diversas doenças com uma precisão de 95%, superando significativamente os métodos tradicionais.
      
    O estudo, conduzido por uma equipe internacional de pesquisadores, analisou mais de 100.000 casos médicos ao longo de três anos. Os resultados mostram que a IA não apenas é mais precisa, mas também consegue identificar padrões que frequentemente passam despercebidos pelos profissionais de saúde.
      
    "Esta tecnologia representa um marco na medicina moderna", afirma Dr. Maria Silva, uma das principais pesquisadoras do projeto. "Estamos falando de uma ferramenta que pode salvar milhares de vidas através de diagnósticos mais rápidos e precisos."
      
    A implementação desta tecnologia já começou em alguns hospitais piloto, com resultados promissores. Os médicos relatam que a IA serve como uma segunda opinião valiosa, especialmente em casos complexos onde o diagnóstico tradicional pode ser desafiador.
      
    Especialistas preveem que nos próximos cinco anos, esta tecnologia estará amplamente disponível em hospitais ao redor do mundo, revolucionando completamente a forma como diagnosticamos e tratamos doenças.
    `,
    coverImage: "/placeholder.svg?height=400&width=800",
    publishedAt: "2024-01-15",
    author: "Dr. João Santos",
    category: "Tecnologia",
    readTime: "5 min",
  },
  {
    id: "2",
    slug: "energia-renovavel-bate-recordes",
    title: "Energia Renovável Bate Recordes Mundiais em 2024",
    excerpt: "Fontes de energia limpa representam agora 40% da matriz energética global, marcando um marco histórico.",
    content: `
    O ano de 2024 marca um ponto de virada histórico na transição energética mundial. Pela primeira vez na história, as fontes de energia renovável representam 40% da matriz energética global, superando todas as expectativas dos especialistas.
      
    Os dados, divulgados pela Agência Internacional de Energia Renovável (IRENA), mostram um crescimento exponencial na capacidade instalada de energia solar e eólica. Apenas no último ano, foram adicionados 295 gigawatts de capacidade renovável em todo o mundo.
      
    A China lidera este movimento, representando 60% de toda a nova capacidade instalada, seguida pelos Estados Unidos e países da União Europeia. O Brasil também se destaca, ocupando a quinta posição no ranking mundial de investimentos em energia limpa.
      
    "Estamos testemunhando uma revolução energética sem precedentes", comenta Ana Costa, especialista em energia sustentável. "Os custos das tecnologias renováveis caíram drasticamente, tornando-as não apenas ambientalmente corretas, mas também economicamente vantajosas."
      
    As projeções indicam que até 2030, as energias renováveis podem representar mais de 60% da matriz energética mundial, contribuindo significativamente para as metas de redução de emissões de carbono estabelecidas no Acordo de Paris.
    `,
    coverImage: "/placeholder.svg?height=400&width=800",
    publishedAt: "2024-01-12",
    author: "Carlos Mendes",
    category: "Meio Ambiente",
    readTime: "4 min",
  },
  {
    id: "3",
    slug: "descoberta-arqueologica-egito",
    title: "Descoberta Arqueológica no Egito Revela Segredos Antigos",
    excerpt: "Arqueólogos descobrem tumba intacta de 4.000 anos com artefatos únicos que podem reescrever a história.",
    content: `
    Uma descoberta arqueológica extraordinária no Vale dos Reis, no Egito, está causando grande excitement na comunidade científica mundial. Arqueólogos descobriram uma tumba completamente intacta de aproximadamente 4.000 anos, contendo artefatos únicos que podem revolucionar nossa compreensão da civilização egípcia antiga.
      
    A tumba, identificada como pertencente a um alto funcionário da corte faraônica, contém mais de 3.000 objetos perfeitamente preservados, incluindo joias, papiros com hieróglifos inéditos e múmias de animais sagrados.
      
    Dr. Ahmed Hassan, líder da expedição, descreve a descoberta como "um tesouro arqueológico sem precedentes". Os papiros encontrados contêm textos que podem fornecer novas informações sobre práticas religiosas e administrativas do Antigo Egito.
      
    Entre os achados mais impressionantes está um sarcófago dourado com inscrições que sugerem conexões comerciais com civilizações distantes, incluindo possíveis rotas comerciais com a América pré-colombiana - uma teoria que, se confirmada, poderia reescrever os livros de história.
      
    A equipe internacional de pesquisadores utilizará as mais avançadas tecnologias de análise, incluindo tomografia computadorizada e espectrometria, para estudar os artefatos sem danificá-los. Os resultados preliminares serão apresentados em uma conferência internacional no próximo mês.
    `,
    coverImage: "/placeholder.svg?height=400&width=800",
    publishedAt: "2024-01-10",
    author: "Dra. Fernanda Lima",
    category: "História",
    readTime: "6 min",
  },
  {
    id: "4",
    slug: "startup-brasileira-unicornio",
    title: "Startup Brasileira se Torna Unicórnio com Solução Inovadora",
    excerpt:
      "Empresa de tecnologia financeira alcança avaliação de US$ 1 bilhão após revolucionar pagamentos digitais.",
    content: `
    O ecossistema de startups brasileiro ganhou mais um unicórnio. A FinTech PayBrasil alcançou uma avaliação de US$ 1 bilhão em sua mais recente rodada de investimentos, tornando-se a 15ª empresa brasileira a atingir este marco.
      
    Fundada em 2019 por ex-funcionários do Banco Central, a PayBrasil desenvolveu uma solução revolucionária para pagamentos digitais que permite transações instantâneas com taxas 70% menores que os métodos tradicionais.
      
    A rodada Série C foi liderada pelo fundo americano Sequoia Capital, com participação de investidores nacionais como Monashees e Kaszek Ventures. O aporte de US$ 200 milhões será usado para expansão internacional e desenvolvimento de novos produtos.
      
    "Nossa missão é democratizar o acesso aos serviços financeiros", explica Marina Santos, CEO e cofundadora da PayBrasil. "Queremos que qualquer pessoa, independente de sua condição socioeconômica, tenha acesso a soluções financeiras modernas e acessíveis."
      
    A empresa já processa mais de R$ 50 bilhões em transações mensais e atende mais de 10 milhões de usuários. Os planos incluem expansão para outros países da América Latina ainda este ano, começando pelo México e Colômbia.
    `,
    coverImage: "/placeholder.svg?height=400&width=800",
    publishedAt: "2024-01-08",
    author: "Ricardo Oliveira",
    category: "Negócios",
    readTime: "4 min",
  },
  {
    id: "5",
    slug: "vacina-cancer-testes-clinicos",
    title: "Nova Vacina Contra Câncer Mostra Resultados Promissores",
    excerpt: "Testes clínicos de fase 3 demonstram eficácia de 85% na prevenção de recidivas em pacientes com câncer.",
    content: `
    Uma nova vacina terapêutica contra o câncer desenvolvida por pesquisadores brasileiros em parceria com instituições internacionais mostrou resultados extraordinários em testes clínicos de fase 3. A vacina demonstrou 85% de eficácia na prevenção de recidivas em pacientes que já foram tratados para diferentes tipos de câncer.
      
    O estudo, conduzido em 15 países com mais de 5.000 pacientes, representa um avanço significativo na luta contra o câncer. A vacina utiliza uma tecnologia inovadora baseada em RNA mensageiro personalizado para cada tipo de tumor.
      
    Dr. Paulo Rodrigues, oncologista e um dos principais pesquisadores do projeto, explica: "Esta vacina funciona 'ensinando' o sistema imunológico do paciente a reconhecer e atacar células cancerígenas específicas, criando uma memória imunológica duradoura."
      
    Os resultados foram particularmente impressionantes em pacientes com câncer de mama, próstata e pulmão. Além da alta eficácia, a vacina apresentou efeitos colaterais mínimos, limitados principalmente a reações locais no local da aplicação.
      
    A aprovação regulatória está sendo solicitada simultaneamente nos Estados Unidos, Europa e Brasil. Se aprovada, a vacina poderá estar disponível para pacientes já no final de 2024, representando uma nova era no tratamento oncológico.
    `,
    coverImage: "/placeholder.svg?height=400&width=800",
    publishedAt: "2024-01-05",
    author: "Dra. Lucia Ferreira",
    category: "Saúde",
    readTime: "5 min",
  },
]

export function getNewsById(id: string): NewsItem | undefined {
  return newsData.find((news) => news.id === id)
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsData.find((news) => news.slug === slug)
}

export function getAllNews(): NewsItem[] {
  return newsData.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}
