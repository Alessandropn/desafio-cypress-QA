import { headerSelectors } from '../selectors/header.selectors';

/**
 * Page Object para o Header
 * Contém métodos para interagir com o cabeçalho da aplicação
 */
class Header {
  /**
   * Clica no logo para voltar à home
   */
  clickLogo() {
    cy.get(headerSelectors.logo).click();
  }

  /**
   * Clica no menu Home
   */
  clickMenuHome() {
    cy.get(headerSelectors.menuHome).click();
  }

  /**
   * Clica no menu Comprar
   */
  clickMenuComprar() {
    cy.get(headerSelectors.menuComprar).click();
  }

  /**
   * Realiza uma busca
   * @param {string} searchTerm - Termo de busca
   */
  search(searchTerm) {
    cy.get(headerSelectors.searchInput).type(searchTerm);
    cy.get(headerSelectors.searchButton).click();
  }

  /**
   * Clica no botão do carrinho
   */
  clickCartButton() {
    cy.get(headerSelectors.cartDropdown).click();
  }

  /**
   * Verifica a quantidade de itens no carrinho
   * @param {number} expectedCount - Quantidade esperada
   */
  shouldHaveCartCount(expectedCount) {
    cy.get(headerSelectors.cartCountHeader).should('contain', expectedCount.toString());
  }

  /**
   * Obtém a quantidade de itens no carrinho
   * @returns {Cypress.Chainable} - Chainable do Cypress com a quantidade
   */
  getCartCount() {
    return cy.get(headerSelectors.cartButton).invoke('text');
  }

  /**
   * Verifica o total do carrinho
   * @param {string} expectedTotal - Total esperado
   */
  shouldHaveCartTotal(expectedTotal) {
    cy.get(headerSelectors.cartAmountHeader).should('contain', expectedTotal);
  }

  /**
   * Obtém o total do carrinho
   * @returns {Cypress.Chainable} - Chainable do Cypress com o total
   */
  getCartTotal() {
    return cy.get(headerSelectors.cartButton).invoke('text');
  }

  /**
   * Clica no link "Ver carrinho" no dropdown do carrinho
   */
  clickViewCart() {
    cy.get(headerSelectors.cartDropdownViewCartLink).filter(':visible').click();
  }

  /**
   * Clica no link "Checkout" no dropdown do carrinho
   */
  clickCheckout() {
    cy.get(headerSelectors.cartDropdownCheckoutLink).click();
  }

  /**
   * Verifica se o dropdown do carrinho está visível
   */
  cartDropdownShouldBeVisible() {
    cy.get(headerSelectors.cartDropdown).should('be.visible');
  }

  /**
   * Verifica se há itens no dropdown do carrinho
   */
  cartDropdownShouldHaveItems() {
    cy.get(headerSelectors.cartDropdownItem).should('have.length.greaterThan', 0);
  }

  /**
   * Remove um item do dropdown do carrinho
   */
  removeItemFromDropdown() {
    cy.get(headerSelectors.cartDropdownRemoveItem).first().click();
  }

  /**
   * Clica no link da wishlist
   */
  clickWishlist() {
    cy.get(headerSelectors.wishlistLink).click();
  }

  /**
   * Clica no link de conta/login
   */
  clickAccount() {
    cy.get(headerSelectors.accountLink).click();
  }
}

export default new Header();

