const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');
const { expect } = require('@jest/globals');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('3.1 - Testa se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado.',  () => {
    expect.assertions(1);
    saveCartItems('computador');
    expect(localStorage.setItem).toBeCalled();
  });

  it('3.2 - Testa se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro a chave `cartItems` e o segundo sendo o valor passado como argumento para saveCartItems.', () => {
    expect.assertions(1);
    saveCartItems('computador');
    expect(localStorage.setItem).toBeCalledWith('cartItems', 'computador');
  });
});
