/**
 * Selectors para a Product Page
 * Contém todos os locators da página de detalhes do produto
 */
export const productPageSelectors = {
  // Informações do produto
  productTitle: 'h1.product_title',
  productPrice: '.price .woocommerce-Price-amount',
  productDescription: '.woocommerce-product-details__short-description',
  productImage: '.woocommerce-product-gallery__image img',
  
  // Variações do produto
  variationsTable: 'table.variations',
  sizeRow: 'table.variations tr:contains("Size")',
  colorRow: 'table.variations tr:contains("Color")',
  sizeOptions: 'input[name*="size"], input[type="radio"]',
  sizeOption: (size) => `label:contains("${size}"), input[value="${size}"], input[type="radio"][value="${size}"]`,
  sizeOptionByText: (size) => `table.variations tr:contains("Size") label:contains("${size}"), table.variations tr:contains("Size") input[value="${size}"]`,
  colorOptions: 'input[name*="color"], input[type="radio"]',
  colorOption: (color) => `label:contains("${color}"), input[value="${color}"], input[type="radio"][value="${color}"]`,
  colorOptionByText: (color) => `table.variations tr:contains("Color") label:contains("${color}"), table.variations tr:contains("Color") input[value="${color}"]`,
  clearVariations: 'a.reset_variations',
  
  // Quantidade
  quantityInput: 'input.input-text.qty',
  quantityDecrease: 'button[class*="minus"]',
  quantityIncrease: 'button[class*="plus"]',
  
  // Botões de ação
  buyButton: 'button.single_add_to_cart_button',
  addToWishlistButton: 'a.add_to_wishlist',
  compareButton: 'a.compare',
  
  // Mensagens
  successMessage: '.woocommerce-message',
  successMessageText: '.woocommerce-message',
  viewCartLink: '.woocommerce-message .button.wc-forward',
  
  // Informações adicionais
  sku: '.sku',
  stockStatus: '.stock',
  productMeta: '.product_meta'
};

