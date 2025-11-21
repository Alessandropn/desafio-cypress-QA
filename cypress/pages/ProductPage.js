import { productPageSelectors } from '../selectors/productPage.selectors';

/**
 * Page Object para a Product Page
 * Contém métodos para interagir com a página de detalhes do produto
 */
class ProductPage {
  /**
   * Visita a página de um produto específico
   * @param {string} productSlug - Slug do produto
   */
  visit(productSlug) {
    cy.visit(`/product/${productSlug}/`);
  }

  /**
   * Verifica se a página do produto foi carregada
   */
  shouldBeVisible() {
    cy.get(productPageSelectors.productTitle).should('be.visible');
  }

  /**
   * Obtém o título do produto
   * @returns {Cypress.Chainable} - Chainable do Cypress com o texto do título
   */
  getProductTitle() {
    return cy.get(productPageSelectors.productTitle).invoke('text');
  }

  /**
   * Obtém o preço do produto
   * @returns {Cypress.Chainable} - Chainable do Cypress com o texto do preço
   */
  getProductPrice() {
    return cy.get(productPageSelectors.productPrice).first().invoke('text');
  }

  /**
   * Seleciona o tamanho do produto
   * @param {string} size - Tamanho a ser selecionado (XS, S, M, L, XL)
   */
selectSize(size) {
  // Espera a tabela de variações estar visível
  cy.get('table.variations', { timeout: 10000 }).should('be.visible');

  cy.wait(500);

  // Seleciona diretamente o item da variação baseado no data-value
  cy.get('ul.variable-items-wrapper[data-attribute_name="attribute_size"]')
    .find(`li[data-value="${size}"]`)
    .should('be.visible')
    .click({ force: true });

  // Aguarda UI atualizar
  cy.wait(1000);
}

  /**
   * Seleciona a cor do produto
   * @param {string} color - Cor a ser selecionada
   */
  selectColor(color) {
    // Espera a tabela de variações estar visível
    cy.get('table.variations', { timeout: 10000 }).should('be.visible');
  
    // Seleciona diretamente o item da cor baseado no data-value
    cy.get('ul.variable-items-wrapper[data-attribute_name="attribute_color"]')
      .find(`li[data-value="${color}"]`)
      .should('be.visible')
      .click({ force: true });
  
    // Aguarda a UI atualizar
    cy.wait(500);
  }

  /**
   * Seleciona tamanho e cor do produto (método auxiliar)
   * @param {string} size - Tamanho a ser selecionado
   * @param {string} color - Cor a ser selecionada
   */
  selectVariations(size, color) {
    this.selectSize(size);
    this.selectColor(color);
    // Aguarda o botão ficar habilitado após selecionar as variações
    cy.wait(1000);
  }

  /**
   * Limpa as variações selecionadas
   */
  clearVariations() {
    cy.get(productPageSelectors.clearVariations).click();
  }

  /**
   * Define a quantidade do produto
   * @param {number} quantity - Quantidade desejada
   */
  setQuantity(quantity) {
    cy.get(productPageSelectors.quantityInput).clear().type(quantity.toString());
  }

  /**
   * Aumenta a quantidade em 1
   */
  increaseQuantity() {
    cy.get(productPageSelectors.quantityIncrease).click();
  }

  /**
   * Diminui a quantidade em 1
   */
  decreaseQuantity() {
    cy.get(productPageSelectors.quantityDecrease).click();
  }

  /**
   * Adiciona o produto ao carrinho
   * Verifica se o botão está habilitado antes de clicar
   */
  addToCart() {
    // Verifica se o botão não está desabilitado antes de clicar
    cy.get(productPageSelectors.buyButton)
      .should('not.have.class', 'disabled')
      .should('not.have.class', 'wc-variation-selection-needed')
      .click();
    // Aguarda a mensagem de sucesso aparecer
    cy.wait(1000);
  }

  /**
   * Verifica se a mensagem de sucesso foi exibida
   * @param {string} productName - Nome do produto esperado na mensagem
   */
  shouldShowSuccessMessage(productName) {
    cy.get(productPageSelectors.successMessage)
      .should('be.visible')
      .and('contain', productName);
  }

  /**
   * Clica no link "Ver carrinho" na mensagem de sucesso
   */
  clickViewCart() {
    cy.get(productPageSelectors.viewCartLink).click();
  }

  /**
   * Verifica se o botão de comprar está habilitado
   */
  buyButtonShouldBeEnabled() {
    cy.get(productPageSelectors.buyButton).should('not.be.disabled');
  }

  /**
   * Verifica se o botão de comprar está desabilitado
   */
  buyButtonShouldBeDisabled() {
    cy.get(productPageSelectors.buyButton).should('have.class','disabled');
  }

  /**
   * Obtém o SKU do produto
   * @returns {Cypress.Chainable} - Chainable do Cypress com o texto do SKU
   */
  getSKU() {
    return cy.get(productPageSelectors.sku).invoke('text');
  }

  /**
   * Verifica o status de estoque
   * @param {string} status - Status esperado (ex: "em estoque")
   */
  shouldHaveStockStatus(status) {
    cy.get(productPageSelectors.stockStatus).should('contain', status);
  }
}

export default new ProductPage();

