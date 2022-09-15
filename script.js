// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições!

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  const button = createCustomElement(
    'button',
    'item__add',
    'Adicionar ao carrinho!',
  );
  section.appendChild(button);

  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
// const getIdFromProductItem = (product) => product.querySelector('span.item_id').innerText;

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */
const cart = document.querySelector('.cart__items');

const totalPrice = async () => {
  const tprice = document.querySelector('.total-price');
  const liS = document.querySelectorAll('.cart__item');
  let count = 0;
  liS.forEach((e) => {
    const productAdd = Number(e.innerHTML.split('$')[1]);
    count += productAdd;
  });
  tprice.innerText = `${count}`;
};

const cartItemClickListener = (event) => {
  event.target.remove();
  totalPrice();
  saveCartItems(cart.innerHTML);
};

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const products = async () => {
  const allProducts = await fetchProducts('computador');
  allProducts.results.forEach((element) => {
    const getSectionParent = document.querySelector('.items');
    getSectionParent.appendChild(createProductItemElement(element));
  });
};

const addToCart = () => {
  const buttons = document.querySelectorAll('.item__add');

  buttons.forEach((e) => {
    e.addEventListener('click', async (event) => {
      const product = event.target.parentNode.firstChild.innerText;
      const productData = await fetchItem(product);
      cart.appendChild(createCartItemElement(productData));
      totalPrice();
      saveCartItems(cart.innerHTML);
    });
  });
};

const clearCart = () => {
  const reset = document.querySelector('.empty-cart');
  const list = document.querySelector('.cart__items');
  reset.addEventListener('click', () => {
    list.innerText = '';
    totalPrice();
    saveCartItems(cart.innerHTML);
  });
};

const removeSaveItem = () => {
  const getLi = document.querySelectorAll('.cart__item');
  getLi.forEach((e) => {
    e.addEventListener('click', cartItemClickListener);
  });
};

const loading = () => {
  const container = document.querySelector('.container');
  container.before(createCustomElement('span', 'loading', 'carregando...'));
};

const removeLoading = () => {
  const removeL = document.querySelector('.loading');
  console.log(removeL);
  removeL.remove();
};

window.onload = async () => {
  loading();
  await products();
  clearCart();
  addToCart();
  cart.innerHTML = getSavedCartItems();
  totalPrice();
  removeSaveItem();
  removeLoading();
};
