// Função para unificar todos os dados
function obterTodosDados() {
    return [...dadosLivros, ...dadosJogos, ...dadosReceitas, ...dadosCursos, ...dadosVagas, ...dadosPets];
}

function pesquisar() {
    let input = document.querySelector('.pesquisa input').value.toLowerCase().trim();
    let section = document.getElementById("resultados-pesquisa");

    // Verifica se o campo de pesquisa está vazio
    if (input === "") {
        section.innerHTML = "<p class='text'>Por favor, digite o nome de um item para pesquisar.</p>";
        return;
    }

    // Unificando os dados
    let todosDados = obterTodosDados();

    // Filtrando dados com base no título
    let dadosFiltrados = todosDados.filter(dado => dado.titulo.toLowerCase().includes(input));

    // Construindo o HTML para exibir os resultados
    let resultadosHTML = "";

    if (dadosFiltrados.length > 0) {
        for (let dado of dadosFiltrados) {
            resultadosHTML += `
                <div class="item-resultado">
                  <h2>${dado.titulo}</h2>
                  ${dado.image ? `<img src="${dado.image}" alt="${dado.titulo}" class="imagem-resultado">` : ''}
                  <p class="descricao-meta">${dado.descricao}</p>
                  <a href="${dado.links[0]}" target="_blank">Mais Informações</a>
                </div>
            `;
        }
    } else {
        resultadosHTML = "<p>Nenhum item encontrado.</p>";
    }

    // Atualiza a seção com os resultados
    section.innerHTML = resultadosHTML;
}

document.addEventListener('DOMContentLoaded', () => {
    const escolhaContainer = document.querySelector('.container_escolha');
    const pesquisaSection = document.getElementById('pesquisa');
    const topicosDiv = document.getElementById('topicos'); // Adiciona referência à div.topicos

    escolhaContainer.addEventListener('click', (event) => {
        const target = event.target;

        if (target.classList.contains('caixinha')) {
            const tema = target.getAttribute('data-theme');
            alterarTema(tema);
        }
    });

    function alterarTema(tema) {
        const body = document.body;
        const imagensFundo = {
            games: 'images/backgrounds/Games.jpg',
            livros: 'images/backgrounds/Livros.jpg',
            receitas: 'images/backgrounds/Receitas.jpg',
            cursos: 'images/backgrounds/Cursos.png',
            vagas: 'images/backgrounds/Trabalho.png',
            petshop: 'images/backgrounds/pet.jpg',
        };

        // Debug: Verifica se o tema é válido
        console.log(`Tema selecionado: ${tema}`);
        console.log(`Imagem de fundo: ${imagensFundo[tema]}`);

        // Verifica se a imagem de fundo existe e aplica
        if (imagensFundo[tema]) {
            body.style.backgroundImage = `url(${imagensFundo[tema]})`;
            body.style.backgroundSize = 'cover';
            body.style.backgroundPosition = 'center';
            body.style.backgroundRepeat = 'no-repeat';
        } else {
            console.error(`Tema ${tema} não encontrado.`);
        }

        // Mostrar a barra de pesquisa
        pesquisaSection.classList.add('search-bar-visible');

        // Ocultar o container de escolha
        escolhaContainer.style.display = 'none';

        // Ocultar a div.topicos
        if (topicosDiv) {
            topicosDiv.style.display = 'none';
        }
    }
});


