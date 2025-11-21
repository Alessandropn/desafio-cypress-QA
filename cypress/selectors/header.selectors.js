/**
 * Selectors para o Header
 * Contém todos os locators do cabeçalho da aplicação
 */
export const headerSelectors = {
  // Logo
  logo: '.logo-in-theme',
  
  // Menu de navegação
  menuHome: 'a[href*="/home/"]',
  menuComprar: 'a[href*="/produtos/"]',
  menuBlog: 'a[href*="#"]',
  menuCategorias: 'a[href*="#"]',
  menuMaisVendidos: 'a[href*="#"]',
  
  // Busca
  searchInput: 'input[type="search"]',
  searchButton: 'button[type="submit"]',
  
  // Carrinho
  cartButton: '.woocommerce-message .button.wc-forward',
  cartCountHeader: '.pull-right  .mini-cart-items',
  cartAmountHeader: '.sub-title .woocommerce-Price-amount.amount',
  cartIcon: '.cart-icon',
  cartCount: 'button[aria-expanded]',
  cartTotal: 'button[aria-expanded] .woocommerce-Price-amount',
  
  // Dropdown do carrinho
  cartDropdown: '.dropdown .icon-basket',
  cartDropdownItem: 'ul[class*="cart"] li',
  cartDropdownItemName: 'ul[class*="cart"] li a[href*="/product/"]',
  cartDropdownItemQuantity: 'ul[class*="cart"] li .quantity',
  cartDropdownItemPrice: 'ul[class*="cart"] li .woocommerce-Price-amount',
  cartDropdownSubtotal: 'ul[class*="cart"] .subtotal .woocommerce-Price-amount',
  cartDropdownViewCartLink: '.mini_cart_inner .button.wc-forward.view-cart',
  cartDropdownCheckoutLink: 'ul[class*="cart"] a[href*="/checkout/"]',
  cartDropdownRemoveItem: 'ul[class*="cart"] a.remove',
  
  // Wishlist
  wishlistLink: 'a[href*="/lista-de-desejos/"]',
  wishlistCount: '.wishlist-count',
  
  // Conta
  accountLink: 'a[href*="/minha-conta/"]',
  loginLink: 'a[href*="/minha-conta/"]',
  signUpLink: 'a[href*="/minha-conta/"]'
};

