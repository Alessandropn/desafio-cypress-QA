/**
 * Selectors para a Cart Page
 * Contém todos os locators da página do carrinho
 */
export const cartPageSelectors = {
  // Título da página
  pageTitle: 'h1.page-title',
  
  // Tabela do carrinho
  cartTable: 'table.shop_table',
  cartTableBody: 'table.shop_table tbody',
  cartItem: 'tr.cart_item',
  
  // Colunas da tabela
  productImage: 'td.product-thumbnail img',
  productName: 'td.product-name a',
  productPrice: 'td.product-price .woocommerce-Price-amount',
  productQuantity: 'td.product-quantity',
  quantityInput: 'input.input-text.qty',
  quantityDecrease: 'button[class*="minus"]',
  quantityIncrease: 'button[class*="plus"]',
  productSubtotal: 'td.product-subtotal .woocommerce-Price-amount',
  removeItemButton: 'td.product-remove a.remove',
  
  // Cupom
  couponSection: '.coupon',
  couponInput: 'input[name="coupon_code"]',
  applyCouponButton: 'button[name="apply_coupon"]',
  updateCartButton: 'button[name="update_cart"]',
  
  // Totais
  cartTotals: '.cart_totals',
  subtotal: '.cart-subtotal .woocommerce-Price-amount',
  total: '.order-total .woocommerce-Price-amount',
  
  // Botões de ação
  proceedToCheckoutButton: 'a.checkout-button',
  continueShoppingLink: 'a[href*="/produtos/"]',
  
  // Mensagens
  emptyCartMessage: '.cart-empty',
  cartEmptyMessage: '.woocommerce-info'
};

