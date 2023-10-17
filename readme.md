# c144 - app react native 2
## Objetivos
 
 - Concluir o aplicativo de recomendação de filmes.
 - Trabalhar em 3 telas para mostrar os filmes populares, os filmes recomendados e os filmes favoritos.
 - Usar as rotas “/movies”, “/recommended” e “/liked” da API Flask.
 ### revisão
  - renderizamos:
    1. Título do filme
    2. Pôster
    3. Duração e data de lançamento
    4. Classificação em estrelas
    5. Botões curtir, não curtir e não assistido

## desafios
 - criar uma tela que conecta outrass 3 telas
 - criar mais três telas 
 - adicionar as rotas: **“/liked”**, **"/popular_movies"**, **"/recommended_movies”**.

 > obs.: Uma tela servirá para exibir os filmes populares, uma para exibir os filmes recomendados e a outra para exibir os filmes favoritos.

 ## Tarefaas
  - Em tela Popular.js
    - 1. classe pré-escrita chamada PopularMoviesScreen com um método constructor, que possui um objeto de estado chamado data (array vazio). Este objeto de estado armazenará todos os dados

  - Para renderizar esses dados de filmes em nosso aplicativo, usaremos o componente Flatlist. Relembrando as props do **Faltlist**:
   - data: dados que devem ser exibidos usando o componente Flatlist.
    - keyExtractor: este método é usado para extrair uma chave única de um determinado item no índice especificado.
    - renderItem: esse método pega um item dos dados e o renderiza na lista.

    2. Vamos definir a função keyExtractor() primeiro. Através da função keyExtractor(), passaremos cada item do array fornecido e seu índice. Então vamos converter este índice em uma string e retorná-lo do keyExtractor().
 
