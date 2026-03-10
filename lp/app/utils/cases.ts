const cases = [
    {
        href: '/cases/nescau-vegano',
        slug: 'nescau-vegano',
        name: 'Nescau Vegano',
        coverImage: '/cases/case-1.png',
        backgroundColor: '#2EA234',
        text: {
            description: 'O Nescau é muito associado ao público infantil e ao consumo com leite, o que limita sua relevância diante de novos hábitos alimentares e públicos que buscam opções mais inclusivas.',
            goal: 'Reposicionar a marca para ampliar o público, criando uma versão que atenda consumidores veganos, intolerantes à lactose e pessoas com dietas mais conscientes.',
            solution: 'Lançamento do Nescau Vegano, acompanhado de uma comunicação mais moderna e inclusiva, reforçando o conceito “Energia para todos, em qualquer momento.” 🌱'
        }
    },
    {
        href: '/cases/kibon',
        slug: 'kibon',
        name: 'Kibon Marcando Território',
        coverImage: '/cases/case-2.png',
        backgroundColor: '',
        text: {
            description: 'A Kibon é uma marca tradicional e presente na memória afetiva dos consumidores, especialmente ligada à infância. Porém, críticas sobre queda na qualidade percebida e aumento de preços têm impactado a forma como parte do público vê a marca hoje.',
            goal: 'Criar o projeto “Marcando Território”, reforçando a presença da Kibon no cotidiano das pessoas e recuperando a conexão emocional com o público.',
            solution: 'Realização de ativações de marca em espaços urbanos e conteúdos para redes sociais, aproximando a Kibon do público e reforçando sua presença no dia a dia por meio de experiências com os produtos.'
        }
    },
    {
        href: '/cases/semana-da-comunicacao',
        slug: 'semana-da-comunicacao',
        name: 'Semana da Comunicação',
        coverImage: '/cases/case-3.png',
        backgroundColor: '',
        text: {
            description: 'A Pinacoteca de São Paulo enfrenta baixo engajamento do público jovem, principalmente de regiões periféricas, devido à pouca divulgação atrativa nas redes sociais e à percepção de que o museu não faz parte da realidade deles.',
            goal: 'Criar o projeto “Pé na Arte”, aproximando jovens de 14 a 20 anos da periferia do museu por meio de conteúdos digitais, linguagem acessível e experiências culturais mais interativas.',
            solution: 'Produção de conteúdos para Instagram, TikTok e YouTube, visitas guiadas gratuitas com atividades interativas e parceria com a Havaianas, reforçando a ideia de que arte é para todos e tornando a Pinacoteca mais presente no universo digital dos jovens. 🎨📱'
        }
    },
    {
        href: '/cases/hi-tea-analise-swot',
        slug: 'hi-tea-analise-swot',
        name: 'HI TEA - Análise SWOT',
        coverImage: '/cases/case-4.png',
        backgroundColor: '',
        text: {
            description: 'O Hi Tea é uma casa de chá chinesa localizada no bairro da Liberdade, conhecida pela variedade de chás, bubble teas e combinações com frutas. Apesar da proposta jovem e diferenciada, o local ainda enfrenta baixa visibilidade e pouca divulgação nas redes sociais.',
            goal: 'Fortalecer a presença digital da marca e atrair mais público jovem por meio de campanhas nas redes sociais e ações que valorizem a estética e a cultura asiática.',
            solution: 'Criação de conteúdos para redes sociais, parcerias com influenciadores e promoções com combos e eventos temáticos, aumentando a visibilidade e o fluxo de clientes no estabelecimento.'
        }
    },
    {
        href: '/cases/o-boticario',
        slug: 'o-boticario',
        name: 'O BOTICARIO - Estratégia de Marca',
        coverImage: '/cases/case-5.png',
        backgroundColor: '',
        text: {
            description: 'Explicar a evolução e o posicionamento de marca de O Boticário, mostrando como sua identidade visual e seu branding ajudaram a construir reconhecimento no mercado de cosméticos.',
            goal: 'Analisar a história da marca, a evolução de seus logotipos e o papel do branding na diferenciação dos produtos, destacando como a perfumaria e a memória afetiva dos consumidores fortalecem a identidade da empresa.',
            solution: 'Apresentar a trajetória de Grupo Boticário, a evolução da identidade visual ao longo dos anos e como seus perfumes icônicos consolidaram o posicionamento da marca, reforçando a importância do branding no mercado de hidratantes e cosméticos. 💄🌿'
        }
    },
    {
        href: '/cases/wanri-podcast',
        slug: 'wanri-podcast',
        name: 'WANRI - Podcast',
        coverImage: '/cases/case-6.png',
        backgroundColor: '',
        text: {
            description: 'O Wanri é um restaurante oriental localizado na liberdade desde 1962, com um ambiente acolhedor proporcionando as culinárias chinesa e japonesa, trazendo pratos clássicos e em combinados harmonizados.',
            goal: 'Fortalecer a visibilidade e a presença do restaurante Wanri, valorizando sua localização estratégica e a qualidade do cardápio para atrair mais clientes.harmonizados.',
            solution: 'Investir em marketing digital, melhorar a sinalização do local e criar ações como programas de fidelidade e parcerias com empresas da região.'
        }
    },
    {
        href: 'cases/connect-refeicao',
        slug: 'connect-refeicao',
        name: 'Connect Refeição',
        coverImage: '/cases/case-7.png',
        backgroundColor: '',
        text: {
            description: 'A Conect Refeição, marmitaria da região de Franco da Rocha, possui boa qualidade e aceitação entre clientes, mas enfrenta baixa visibilidade digital, comunicação pouco estruturada e falta de posicionamento claro, o que dificulta o crescimento e a diferenciação no mercado.',
            goal: 'Desenvolver um reposicionamento de marca, com nova identidade visual e estratégia de comunicação digital, destacando o sabor caseiro, a praticidade e o atendimento próximo ao cliente.',
            solution: 'Criação de uma comunicação mais moderna nas redes sociais, peças publicitárias estratégicas e presença digital consistente, fortalecendo o reconhecimento da marca e aproximando a Conect Refeição do público que busca refeições práticas com gosto de comida feita em casa. 🍲📱'
        }
    },
    {
        href: '/cases/pe-na-arte-pinacoteca',
        slug: 'pe-na-arte-pinacoteca',
        name: 'Pé na Arte - Pinacoteca SP',
        coverImage: '/cases/case-8.png',
        backgroundColor: '',
        text: {
            description: 'A Pinacoteca de São Paulo enfrenta baixo engajamento do público jovem, principalmente de regiões periféricas, devido à pouca divulgação atrativa nas redes sociais e à percepção de que o museu não faz parte da realidade deles.',
            goal: 'Criar o projeto “Pé na Arte”, aproximando jovens de 14 a 20 anos da periferia do museu por meio de conteúdos digitais, linguagem acessível e experiências culturais mais interativas.',
            solution: 'Produção de conteúdos para Instagram, TikTok e YouTube, visitas guiadas gratuitas com atividades interativas e parceria com a Havaianas, reforçando a ideia de que arte é para todos e tornando a Pinacoteca mais presente no universo digital dos jovens. 🎨📱'
        }
    },
    {
        href: '/cases/dancando-na-pina',
        slug: 'dancando-na-pina',
        name: 'Dancando na PINA',
        coverImage: '/cases/case-9.png',
        backgroundColor: '',
        text: {
            description: 'A Pinacoteca de São Paulo é um importante espaço cultural, mas muitos jovens ainda não se sentem conectados ao museu ou desconhecem suas atividades, o que reduz o engajamento desse público.',
            goal: 'Criar o projeto “Dançando na Pina”, aproximando jovens de 14 a 20 anos do museu por meio da dança e de experiências culturais mais interativas.',
            solution: 'Realização de apresentações e oficinas de dança em parceria com a EDASP, além de conteúdos para redes sociais que incentivem a participação e aproximem o público jovem da Pinacoteca. '
        }
    }
]

export default cases