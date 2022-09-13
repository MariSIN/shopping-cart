const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');
const { expect } = require('@jest/globals');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('4.1 - Testa se, ao executar getSavedCartItems, o método localStorage.getItem é chamado.',  () => {
    expect.assertions(1);
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalled();
  });

  it('4.2 - Testa se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o `cartItems` como parâmetro.', () => {
    expect.assertions(1);
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalledWith('cartItems');
  });
});

