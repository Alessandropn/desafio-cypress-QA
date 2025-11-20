import { homePageSelectors } from '../selectors/homePage.selectors';

/**
 * Page Object para a Home Page
 * Contém métodos para interagir com a página inicial
 */
class HomePage {
  /**
   * Visita a página inicial
   */
  visit() {
    cy.visit('/');
  }

  /**
   * Clica no menu "Comprar"
   */
  clickMenuComprar() {
    cy.get(homePageSelectors.menuComprar).click();
  }

  /**
   * Clica em um produto específico pelo título
   * @param {string} productName - Nome do produto
   */
  clickProduct(productName) {
    cy.get(homePageSelectors.productTitle)
      .contains(productName)
      .click();
  }

  /**
   * Clica no primeiro produto da lista
   */
  clickFirstProduct() {
    cy.get(homePageSelectors.productLink).first().click();
  }

  /**
   * Verifica se a página foi carregada corretamente
   */
  shouldBeVisible() {
    cy.get('body').should('be.visible');
  }

  /**
   * Verifica se há produtos na página
   */
  shouldHaveProducts() {
    cy.get(homePageSelectors.productCard).should('have.length.greaterThan', 0);
  }

  /**
   * Obtém o título do primeiro produto
   * @returns {Cypress.Chainable} - Chainable do Cypress com o texto do produto
   */
  getFirstProductTitle() {
    return cy.get(homePageSelectors.productTitle).first().invoke('text');
  }
}

export default new HomePage();

