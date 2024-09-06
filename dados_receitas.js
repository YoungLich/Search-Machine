// Base de dados com receitas doces e salgadas
// Título, Descrição prévia, Imagem, Links (Informações completas)

let dadosReceitas = [
    {
        titulo: "Bolo de Chocolate",
        descricao: `
            Um delicioso bolo de chocolate com cobertura cremosa e sabor intenso.
            <ul>
                <li>2 ovos</li>
                <li>1 xícara de leite</li>
                <li>1 xícara de óleo</li>
                <li>1 xícara de açúcar</li>
                <li>1 xícara de farinha de trigo</li>
                <li>1/2 xícara de cacau em pó</li>
                <li>1 colher de sopa de fermento em pó</li>
                <li>1 pitada de sal</li>
                <li>Modo de preparo: Misture todos os ingredientes, despeje em uma forma untada e asse por 30 minutos a 180°C.</li>
            </ul>
        `,
        image: 'images/Receitas/bolo-de-chocolate.jpg',
        links: ["https://bakeandcakegourmet.com.br/receitas/bolo-de-chocolate-facil-e-barato"]
    },
    {
        titulo: "Pão de Queijo",
        descricao: `
            Pãozinho brasileiro com queijo, crocante por fora e macio por dentro.
            <ul>
                <li>2 xícaras de polvilho doce</li>
                <li>1 xícara de queijo ralado</li>
                <li>1/2 xícara de leite</li>
                <li>1/2 xícara de óleo</li>
                <li>2 ovos</li>
                <li>1 colher de chá de sal</li>
                <li>Modo de preparo: Misture todos os ingredientes até formar uma massa homogênea, molde em bolinhas e asse por 20 minutos a 200°C.</li>
            </ul>
        `,
        image: 'images/Receitas/pao-de-queijo.jpg',
        links: ["https://vovopalmirinha.com.br/pao-de-queijo/"]
    },
    {
        titulo: "Tiramisu",
        descricao: `
            Sobremesa italiana com camadas de café e mascarpone, polvilhada com cacau.
            <ul>
                <li>3 ovos</li>
                <li>1 xícara de açúcar</li>
                <li>250g de queijo mascarpone</li>
                <li>1 xícara de café forte</li>
                <li>1 pacote de biscoitos savoiardi</li>
                <li>Cacau em pó para polvilhar</li>
                <li>Modo de preparo: Bata as gemas com o açúcar, adicione o mascarpone e misture. Mergulhe os biscoitos no café e faça camadas com o creme. Leve à geladeira por 4 horas.</li>
            </ul>
        `,
        image: 'images/Receitas/tiramisu.png',
        links: ["https://www.terra.com.br/vida-e-estilo/degusta/receitas/tiramisu-aprenda-a-fazer-5-versoes-da-popular-sobremesa-italiana,0469478120f459c8975032243353bb27hhzwk24k.html"]
    },
    {
        titulo: "Escondidinho de Carne Seca",
        descricao: `
            Prato brasileiro com carne seca desfiada coberta com purê de mandioca.
            <ul>
                <li>500g de carne seca desfiada</li>
                <li>1 kg de mandioca cozida e amassada</li>
                <li>1 cebola picada</li>
                <li>2 dentes de alho picados</li>
                <li>1/2 xícara de leite</li>
                <li>1/4 xícara de queijo ralado</li>
                <li>Modo de preparo: Refogue a carne seca com cebola e alho, faça um purê com a mandioca e leite. Em um refratário, faça camadas de carne e purê. Cubra com queijo e asse por 25 minutos a 200°C.</li>
            </ul>
        `,
        image: 'images/Receitas/escondidinho.jpg',
        links: ["https://www.saboresajinomoto.com.br/receita/escondidinho-com-carne-seca"]
    },
    {
        titulo: "Brigadeiro",
        descricao: `
            Docinho brasileiro feito com leite condensado e chocolate, coberto com granulado.
            <ul>
                <li>1 lata de leite condensado</li>
                <li>1 colher de sopa de manteiga</li>
                <li>1/2 xícara de cacau em pó</li>
                <li>Granulado para cobertura</li>
                <li>Modo de preparo: Cozinhe o leite condensado, manteiga e cacau em uma panela, mexendo até desgrudar do fundo. Deixe esfriar, modele em bolinhas e passe no granulado.</li>
            </ul>
        `,
        image: 'images/Receitas/Brigadeiro.jpg',
        links: ["https://www.grupopq.com.br/receita/brigadeiro-com-amido/"]
    },
    {
        titulo: "Coxinha",
        descricao: `
            Salgado recheado com frango desfiado e coberto com uma camada crocante.
            <ul>
                <li>1 kg de peito de frango desfiado</li>
                <li>2 xícaras de farinha de trigo</li>
                <li>1 xícara de farinha de rosca</li>
                <li>2 ovos</li>
                <li>1 cebola picada</li>
                <li>1 dente de alho picado</li>
                <li>Modo de preparo: Cozinhe o frango com cebola e alho, faça a massa com farinha e água, modele em formato de coxinha, passe na farinha de rosca e frite até dourar.</li>
            </ul>
        `,
        image: 'images/Receitas/Coxinha.jpg',
        links: ["https://www.comidaereceitas.com.br/salgados/coxinha-de-carne-seca.html#google_vignette"]
    },
    {
        titulo: "Cheesecake de Frutas Vermelhas",
        descricao: `
            Cheesecake cremoso com cobertura de frutas vermelhas frescas.
            <ul>
                <li>200g de biscoito triturado</li>
                <li>100g de manteiga derretida</li>
                <li>500g de cream cheese</li>
                <li>1 xícara de açúcar</li>
                <li>3 ovos</li>
                <li>1 xícara de frutas vermelhas</li>
                <li>Modo de preparo: Misture o biscoito com a manteiga e forre o fundo de uma forma. Bata o cream cheese com açúcar e ovos, despeje sobre a base e asse por 45 minutos a 160°C. Cubra com frutas vermelhas antes de servir.</li>
            </ul>
        `,
        image: 'images/Receitas/Cheesecake.jpg',
        links: ["https://www.sabornamesa.com.br/receitas-de-sobremesas/cheesecake-de-frutas-vermelhas"]
    },
    {
        titulo: "Feijoada",
        descricao: `
            Prato típico brasileiro com feijão preto, carne de porco e acompanhamentos diversos.
            <ul>
                <li>500g de feijão preto</li>
                <li>200g de carne seca</li>
                <li>200g de costela de porco</li>
                <li>1 linguiça calabresa</li>
                <li>1 cebola picada</li>
                <li>4 dentes de alho picados</li>
                <li>Modo de preparo: Cozinhe o feijão com as carnes, cebola e alho até que tudo esteja bem temperado e macio. Sirva com arroz, couve e laranja.</li>
            </ul>
        `,
        image: 'images/Receitas/Feijoada.png',
        links: ["https://www.receitadevovo.com.br/receitas/feijoada"]
    },
    {
        titulo: "Pudim",
        descricao: `
            Sobremesa cremosa com sabor de caramelo e textura aveludada.
            <ul>
                <li>1 lata de leite condensado</li>
                <li>2 latas de leite</li>
                <li>3 ovos</li>
                <li>1 xícara de açúcar</li>
                <li>Modo de preparo: Faça um caramelo com o açúcar e despeje em uma forma. Bata o leite condensado, leite e ovos, e despeje sobre o caramelo. Asse em banho-maria por 1 hora a 180°C.</li>
            </ul>
        `,
        image: 'images/Receitas/Pudim.jpg',
        links: ["https://www.mococa.com.br/receita/receita-de-pudim/"]
    },
    {
        titulo: "Pavê de Chocolate",
        descricao: `
            Sobremesa em camadas com biscoito e creme de chocolate.
            <ul>
                <li>1 pacote de biscoitos</li>
                <li>1 lata de leite condensado</li>
                <li>1 xícara de leite</li>
                <li>100g de chocolate meio amargo</li>
                <li>1 colher de sopa de manteiga</li>
                <li>Modo de preparo: Faça um creme com leite condensado, leite e chocolate. Alterne camadas de creme e biscoitos em um refratário e leve à geladeira por 4 horas.</li>
            </ul>
        `,
        image: 'images/Receitas/Pave.png',
        links: ["https://receitas.globo.com/tipos-de-prato/doces-e-sobremesas/pave-de-chocolate-517dc0564d09386759000046.ghtml"]
    },
    {
        titulo: "Mousse de Maracujá",
        descricao: `
            Sobremesa leve com sabor refrescante de maracujá.
            <ul>
                <li>1 lata de leite condensado</li>
                <li>1 lata de creme de leite</li>
                <li>1 xícara de suco de maracujá</li>
                <li>1 pacote de gelatina incolor</li>
                <li>Modo de preparo: Dissolva a gelatina no suco de maracujá e misture com leite condensado e creme de leite. Coloque em um recipiente e leve à geladeira até firmar.</li>
            </ul>
        `,
        image: 'images/Receitas/mousse.jpg',
        links: ["https://www.tudogostoso.com.br/receita/544-mousse-de-maracuja.html"]
    },
];
