# Boas-vindas ao repositório do projeto Carrinho de Compras!

Neste projeto foram consumidos dados diretamente de uma API e o desenvolvimento foi orientado a testes (TDD), garantindo um código de qualidade e verificando se a aplicação estava funcionando corretamente. A experiência foi enriquecedora, permitindo compreender melhor os casos de uso da aplicação e garantindo sua efetividade.

:paperclip: https://shopping-cart-orpin-five.vercel.app/

<details>
<summary><strong>⚙️ API do Mercado Livre</strong></summary><br />

O [manual da API do Mercado Livre](https://developers.mercadolivre.com.br/pt_br/itens-e-buscas) contém todas as informações acerca da API (retorno, estrutura). Nesse projeto você vai precisar apenas de alguns dos _endpoints_, sendo eles:

- `https://api.mercadolibre.com/sites/MLB/search?q=$QUERY`: traz uma lista de produtos, onde `$QUERY` é o termo a ser buscado. Por exemplo, se o termo for `computador`, o retorno será parecido com esse:

- `https://api.mercadolibre.com/items/$ItemID`: traz detalhes de um determinado produto, onde `$ItemID` é o `id` do produto a ser buscado. Por exemplo, se o `id` do produto for `MLB1341706310`, o retorno será parecido com esse:

  </details>
