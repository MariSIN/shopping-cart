require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');
const { expect } = require('@jest/globals');

describe('1 - Testa a função fetchProducts', () => {
  it('1.1 - Testa se fetchProducts é uma função.', () => {  
    expect.assertions(1);
    expect(typeof fetchProducts).toBe('function');
  });

  it('1.2 - Testa se a função fetchProducts foi chamada.', 
  async () => {
    expect.assertions(1);
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
  });

  it('1.3 - Testa se a função fetchProducts foi chamada com o endpoint correto.', async () => {
    expect.assertions(1);
    await fetchProducts('computador');
    const response = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(fetch).toBeCalledWith(response);
  });

  it('1.4 - Testa se o retorno da função fetchProducts com o argumento `computador` é uma estrutura de dados igual ao objeto computadorSearch.', async () => {
    expect.assertions(1);
    const products = await fetchProducts('computador');
    expect(products).toEqual(computadorSearch);
  });

  it('1.5 - Teste se, ao chamar a função fetchProducts com o argumento `computador`, a função fetch utiliza o endpoint `https://api.mercadolibre.com/sites/MLB/search?q=computador`.', async () => {
    expect.assertions(1);
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('1.6 - Testa se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: `You must provide an url`.', async () => {
    expect.assertions(1);
    const failRequest = await fetchProducts();
    expect(failRequest).toEqual(new Error ('You must provide an url'));
  })
});
