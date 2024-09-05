function pesquisar() {
    // Obtém o valor do campo de pesquisa
    let input = document.querySelector('.pesquisa input').value.toLowerCase().trim();

    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let resultados = ""; // Inicializa a string para armazenar o HTML gerado

    // Verifica se o campo de pesquisa está vazio
    if (input === "") {
        section.innerHTML = "<p class='text'>Por favor, digite o nome de um lutador para pesquisar.</p>";
        return; // Sai da função para não continuar a pesquisa
    }

    // Filtra os dados com base no título (nome do lutador) correspondente ao termo pesquisado
    let dadosFiltrados = dados.filter(dado => dado.titulo.toLowerCase().includes(input));

    // Gera o HTML apenas para os dados filtrados
    if (dadosFiltrados.length > 0) {
        for (let dado of dadosFiltrados) {
            resultados += `
                <div class="item-resultado">
                  <h2>${dado.titulo}</h2>
                  <p class="descricao-meta">${dado.descricao}</p>
                  ${dado.image ? `<img src="${dado.image}" alt="${dado.titulo}" class="imagem-resultado">` : ''}
                  <a href="${dado.links[0]}" target="_blank">Mais Informações</a> 
                  <a href="${dado.links[1]}" target="_blank">Sherdog</a>
                  ${dado.links[2] ? `<a href="${dado.links[2]}" target="_blank">Instagram</a>` : ''}
                </div>
            `;
        }
    } else {
        resultados = "<p>Nenhum lutador encontrado.</p>"; // Mensagem caso nenhum dado seja encontrado
    }

    // Atualiza a seção com os resultados filtrados
    section.innerHTML = resultados;
}
