<div align="center">
<h1>Search Machine</h1>
Search Machine é uma ferramenta de buscas com base de dados em JavaScript, estilizado com HTML e CSS. Esse projeto foi criado e melhorado durante a imersão Alura Gemini.
</div>
<br>
<div align="center">
<img src="Search Machine.gif" width="800px" alt="Search Machine">
</div>

# Estrutura Básica do Projeto

## Estrutura Básica do HTML

- **Cabeçalho:** Define o título da página, o charset, a viewport e inclui os links para os arquivos CSS e o ícone da página.
- **Corpo:**
  - **Bolha:** Um elemento HTML com animação CSS para criar um efeito visual interessante.
  - **Cabeçalho:** Contém o título principal e o logo da aplicação.
  - **Seção Principal:**
    - **Container de Escolha:** Permite ao usuário escolher o tipo de busca (jogos, livros, etc.) e altera o tema visual da página.
    - **Seção de Pesquisa:** Contém o campo de entrada para a pesquisa e o botão "Search".
    - **Seção de Resultados:** Exibe os resultados da pesquisa.
  - **Rodapé:** Contém informações de copyright e o nome do desenvolvedor.

## JavaScript: A Mágica por Trás da Busca

- **Obtenção de Todos os Dados:** A função `obterTodosDados()` junta todos os dados de jogos, livros, receitas e cursos em um único array para facilitar a pesquisa.
- **Função de Pesquisa:**
  - Captura o termo de pesquisa e filtra os dados com base no título.
  - Constrói o HTML para exibir os resultados da pesquisa.
  - Atualiza a seção de resultados na página.
- **Gerenciamento de Temas:**
  - Escuta o evento de clique nos elementos do container de escolha.
  - Altera o estilo do corpo da página com base no tema selecionado.
  - Mostra a barra de pesquisa e oculta o container de escolha.

## CSS: Estilizando a Página

- **Reset:** Garante que todos os elementos HTML comecem com as mesmas propriedades.
- **Corpo:** Define a fonte, cor de fundo, e outras propriedades gerais da página.
- **Temas:** Aplica estilos específicos para cada tema, como a imagem de fundo.
- **Cabeçalho, Seção Principal e Rodapé:** Definem o layout e o estilo desses elementos.
- **Container de Escolha:** Cria um grid para organizar as opções de busca.
- **Seção de Pesquisa:** Estiliza o campo de entrada e o botão.
- **Seção de Resultados:** Define o estilo dos resultados da pesquisa.
- **Bolha:** Aplica animação CSS para criar o efeito visual.

## Funcionamento Geral

1. O usuário carrega a página.
2. O usuário escolhe um tipo de busca.
3. A página é estilizada de acordo com o tema escolhido.
4. O usuário digita um termo de pesquisa.
5. O JavaScript filtra os dados e exibe os resultados.


