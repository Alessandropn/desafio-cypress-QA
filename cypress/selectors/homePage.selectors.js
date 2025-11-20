/**
 * Selectors para a Home Page
 * Contém todos os locators da página inicial
 */
export const homePageSelectors = {
  // Navegação
  menuComprar: 'a[href*="/produtos/"]',
  
  // Produtos
  productCard: '.product',
  productLink: '.product a.product-image',
  productTitle: '.product h3 a',
  productPrice: '.product .price',
  addToCartButton: '.product .add_to_cart_button',
  
  // Produtos em destaque
  featuredProducts: '.products',
  featuredProductCard: '.products .product',
  
  // Breadcrumb
  breadcrumb: '.woocommerce-breadcrumb'
};

