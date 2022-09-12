const fetchProducts = async () => {
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  try {
    const resposta = await fetch(url);
    const produtos = await resposta.json();
    return produtos;
  } catch (error) {
    return `Algo deu errado ${error}`;
  }
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
