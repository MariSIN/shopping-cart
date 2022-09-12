require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');
const { expect } = require('@jest/globals');

describe('2 - Testa a função fetchItem', () => {
  it('2.1 - Testa se fetchItem é um função.', () => {
    expect.assertions(1);
    expect(typeof fetchItem).toBe('function');
  });

  it('2.2 - Testa se a função fetchItem é chamada.', async () => {
    expect.assertions(1);
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  });

  it('2.3 - Testa se a função fetchItem foi chamada com o endpoint correto.', async () => {
    expect.assertions(1);
    await fetchItem('MLB1615760527');
    const response = 'https://api.mercadolibre.com/items/MLB1615760527';
    expect(fetch).toBeCalledWith(response);
  });

  it('2.4 - Testa se a função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.', async () => {
    expect.assertions(1);
    const item = await fetchItem('MLB1615760527');
    expect(item).toEqual(item);
  });

  it('2.5 - Testa se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527".', async () => {
    expect.assertions(1);
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });

  it('2.6 - Testa  se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: `You must provide an url`.', async () => {
    expect.assertions(1);
    const failRequest = await fetchItem();
    expect(failRequest).toEqual(new Error('You must provide an url'));
  });
});
