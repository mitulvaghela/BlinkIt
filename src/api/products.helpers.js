export const getSanitizedProducts = (products = []) => products.map((product) => ({
   id: product.id,
   name: product.title,
   price: Math.floor(product.price),
   image: 'https://cdn2.vectorstock.com/i/1000x1000/76/66/round-loader-icon-circle-button-load-sign-vector-26917666.jpg',
   description: product.description,
}));