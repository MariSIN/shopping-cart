const fetchItem = async (id) => {
  const url = `https://api.mercadolibre.com/items/${id}`;
  try {
    if (!id) throw new Error('You must provide an url');
    const request = await fetch(url);
    const response = await request.json();
    return response;
  } catch (error) {
    return `Algo deu errado ${error}`;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
