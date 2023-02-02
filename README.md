# Boas-vindas ao repositório do projeto Carrinho de Compras!

### Sétimo projeto feito no curso de Desenvolvimento Web na Trybe e primeiro projeto de Front-End

:paperclip: https://shopping-cart-orpin-five.vercel.app/

<details>
  <summary><strong>👨‍💻 O que foi desenvolvido</strong></summary><br />
  
Um **carrinho de compras** totalmente dinâmico! 🛒

Para isso, foi consumido dados diretamente de uma **API!** 🤩

Nesse projeto pude ter a experiência de pôr em prática o desenvolvimento orientado a testes, o famoso TDD (Test Driven Development)! Que te ajuda a garantir um código de qualidade, percebendo os casos de uso da sua aplicação e garantindo que ela está funcionando da maneira correta! 🚀

</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

Nesse projeto foi implementado o TDD (Test Driven Development) também conhecido como _desenvolvimento orientado a testes_, que é uma prática muito utilizada no mercado de trabalho para garantir que o código será implementado da maneira correta. Ou seja, primeiro deve-se escrever o teste para uma função e depois vai implementar a lógica para que a função execute.

</details>

<details>
<summary><strong>⚙️ API do Mercado Livre</strong></summary><br />

O [manual da API do Mercado Livre](https://developers.mercadolivre.com.br/pt_br/itens-e-buscas) contém todas as informações acerca da API (retorno, estrutura). Nesse projeto você vai precisar apenas de alguns dos _endpoints_, sendo eles:

- `https://api.mercadolibre.com/sites/MLB/search?q=$QUERY`: traz uma lista de produtos, onde `$QUERY` é o termo a ser buscado. Por exemplo, se o termo for `computador`, o retorno será parecido com esse:

- `https://api.mercadolibre.com/items/$ItemID`: traz detalhes de um determinado produto, onde `$ItemID` é o `id` do produto a ser buscado. Por exemplo, se o `id` do produto for `MLB1341706310`, o retorno será parecido com esse:

  </details>
