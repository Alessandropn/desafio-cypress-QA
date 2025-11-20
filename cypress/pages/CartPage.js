import { cartPageSelectors } from '../selectors/cartPage.selectors';

/**
 * Page Object para a Cart Page
 * Contém métodos para interagir com a página do carrinho
 */
class CartPage {
  /**
   * Visita a página do carrinho
   */
  visit() {
    cy.visit('/carrinho/');
  }

  /**
   * Verifica se a página do carrinho foi carregada
   */
  shouldBeVisible() {
    cy.get(cartPageSelectors.pageTitle).should('be.visible').and('contain', 'Carrinho');
  }

  /**
   * Verifica se o carrinho está vazio
   */
  shouldBeEmpty() {
    cy.get(cartPageSelectors.emptyCartMessage).should('be.visible');
  }

  /**
   * Verifica se há itens no carrinho
   */
  shouldHaveItems() {
    cy.get(cartPageSelectors.cartItem).should('have.length.greaterThan', 0);
  }

  /**
   * Obtém o número de itens no carrinho
   * @returns {Cypress.Chainable} - Chainable do Cypress com o número de itens
   */
  getItemCount() {
    return cy.get(cartPageSelectors.cartItem).its('length');
  }

  /**
   * Obtém o nome do primeiro produto no carrinho
   * @returns {Cypress.Chainable} - Chainable do Cypress com o nome do produto
   */
  getFirstProductName() {
    return cy.get(cartPageSelectors.productName).first().invoke('text');
  }

  /**
   * Obtém o preço do primeiro produto no carrinho
   * @returns {Cypress.Chainable} - Chainable do Cypress com o preço
   */
  getFirstProductPrice() {
    return cy.get(cartPageSelectors.productPrice).first().invoke('text');
  }

  /**
   * Obtém a quantidade do primeiro produto
   * @returns {Cypress.Chainable} - Chainable do Cypress com a quantidade
   */
  getFirstProductQuantity() {
    return cy.get(cartPageSelectors.quantityInput).first().invoke('val');
  }

  /**
   * Define a quantidade do primeiro produto
   * @param {number} quantity - Quantidade desejada
   */
  setFirstProductQuantity(quantity) {
    cy.get(cartPageSelectors.quantityInput).first().clear().type(quantity.toString());
  }

  /**
   * Aumenta a quantidade do primeiro produto
   */
  increaseFirstProductQuantity() {
    cy.get(cartPageSelectors.quantityIncrease).first().click();
  }

  /**
   * Diminui a quantidade do primeiro produto
   */
  decreaseFirstProductQuantity() {
    cy.get(cartPageSelectors.quantityDecrease).first().click();
  }

  /**
   * Remove o primeiro item do carrinho
   */
  removeFirstItem() {
    cy.get(cartPageSelectors.removeItemButton).first().click();
  }

  /**
   * Remove um item específico pelo nome do produto
   * @param {string} productName - Nome do produto a ser removido
   */
  removeItem(productName) {
    cy.get(cartPageSelectors.productName)
      .contains(productName)
      .parents(cartPageSelectors.cartItem)
      .find(cartPageSelectors.removeItemButton)
      .click();
  }

  /**
   * Aplica um cupom de desconto
   * @param {string} couponCode - Código do cupom
   */
  applyCoupon(couponCode) {
    cy.get(cartPageSelectors.couponInput).type(couponCode);
    cy.get(cartPageSelectors.applyCouponButton).click();
  }

  /**
   * Atualiza o carrinho
   */
  updateCart() {
    cy.get(cartPageSelectors.updateCartButton).click();
  }

  /**
   * Obtém o subtotal do carrinho
   * @returns {Cypress.Chainable} - Chainable do Cypress com o subtotal
   */
  getSubtotal() {
    return cy.get(cartPageSelectors.subtotal).invoke('text');
  }

  /**
   * Obtém o total do carrinho
   * @returns {Cypress.Chainable} - Chainable do Cypress com o total
   */
  getTotal() {
    return cy.get(cartPageSelectors.total).invoke('text');
  }

  /**
   * Verifica o subtotal do carrinho
   * @param {string} expectedSubtotal - Subtotal esperado
   */
  shouldHaveSubtotal(expectedSubtotal) {
    cy.get(cartPageSelectors.subtotal).should('contain', expectedSubtotal);
  }

  /**
   * Verifica o total do carrinho
   * @param {string} expectedTotal - Total esperado
   */
  shouldHaveTotal(expectedTotal) {
    cy.get(cartPageSelectors.total).should('contain', expectedTotal);
  }

  /**
   * Clica no botão "Concluir compra"
   */
  proceedToCheckout() {
    cy.get(cartPageSelectors.proceedToCheckoutButton).click();
  }

  /**
   * Verifica se um produto específico está no carrinho
   * @param {string} productName - Nome do produto
   */
  shouldContainProduct(productName) {
    cy.get(cartPageSelectors.productName).should('contain', productName);
  }
}

export default new CartPage();

