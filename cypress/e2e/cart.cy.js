import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import Header from '../pages/Header';
import messages from '../fixtures/messages.json';
import products from '../fixtures/products.json';

describe('Fluxo de Carrinho', () => {
  beforeEach(() => {
    // Visita a página inicial antes de cada teste
    HomePage.visit();
  });

  it('Deve adicionar um produto ao carrinho com sucesso', () => {
    const product = products.ingridRunningJacket;

    // Clica no primeiro produto
    HomePage.clickFirstProduct();

    // Verifica se está na página do produto
    ProductPage.shouldBeVisible();
    ProductPage.getProductTitle().should('contain', product.name);

    // Verifica que o botão está desabilitado inicialmente (sem variações)
    ProductPage.buyButtonShouldBeDisabled();

    // Seleciona tamanho e cor (OBRIGATÓRIO para adicionar ao carrinho)
    ProductPage.selectSize(product.defaultSize);
    ProductPage.selectColor(product.defaultColor);

    // Verifica se o botão está habilitado após selecionar as variações
    ProductPage.buyButtonShouldBeEnabled();

    // Adiciona ao carrinho
    ProductPage.addToCart();

    // Verifica mensagem de sucesso
    ProductPage.shouldShowSuccessMessage(product.name);

    // Verifica se o carrinho foi atualizado no header
    Header.shouldHaveCartCount(1);
    Header.shouldHaveCartTotal(product.price);
  });

  it('Deve navegar para o carrinho e verificar o produto adicionado', () => {
    const product = products.ingridRunningJacket;

    // Adiciona produto ao carrinho
    HomePage.clickFirstProduct();
    ProductPage.shouldBeVisible();
    
    // Seleciona tamanho e cor (OBRIGATÓRIO)
    ProductPage.selectSize(product.defaultSize);
    ProductPage.selectColor(product.defaultColor);
    
    // Verifica que o botão está habilitado
    ProductPage.buyButtonShouldBeEnabled();
    
    // Adiciona ao carrinho
    ProductPage.addToCart();

    // Clica em "Ver carrinho" na mensagem de sucesso
    ProductPage.clickViewCart();

    // Verifica se está na página do carrinho
    CartPage.shouldBeVisible();
    CartPage.shouldHaveItems();
    CartPage.shouldContainProduct(product.name);
    CartPage.shouldHaveSubtotal(product.price);
    CartPage.shouldHaveTotal(product.price);
  });

  it('Deve atualizar a quantidade do produto no carrinho', () => {
    const product = products.ingridRunningJacket;
    const newQuantity = 3;

    // Adiciona produto ao carrinho
    HomePage.clickFirstProduct();
    ProductPage.shouldBeVisible();
    
    // Seleciona tamanho e cor (OBRIGATÓRIO)
    ProductPage.selectSize(product.defaultSize);
    ProductPage.selectColor(product.defaultColor);
    ProductPage.buyButtonShouldBeEnabled();
    
    ProductPage.addToCart();
    ProductPage.clickViewCart();

    // Atualiza a quantidade
    CartPage.setFirstProductQuantity(newQuantity);
    CartPage.updateCart();

    // Verifica se a quantidade foi atualizada
    CartPage.getFirstProductQuantity().should('eq', newQuantity.toString());
  });

  it('Deve remover um produto do carrinho', () => {
    const product = products.ingridRunningJacket;

    // Adiciona produto ao carrinho
    HomePage.clickFirstProduct();
    ProductPage.shouldBeVisible();
    
    // Seleciona tamanho e cor (OBRIGATÓRIO)
    ProductPage.selectSize(product.defaultSize);
    ProductPage.selectColor(product.defaultColor);
    ProductPage.buyButtonShouldBeEnabled();
    
    ProductPage.addToCart();
    ProductPage.clickViewCart();

    // Verifica que há itens no carrinho
    CartPage.shouldHaveItems();

    // Remove o item
    CartPage.removeFirstItem();

    // Verifica que o carrinho está vazio
    CartPage.shouldBeEmpty();
  });

  it('Deve verificar o dropdown do carrinho no header', () => {
    const product = products.ingridRunningJacket;

    // Adiciona produto ao carrinho
    HomePage.clickFirstProduct();
    ProductPage.shouldBeVisible();
    
    // Seleciona tamanho e cor (OBRIGATÓRIO)
    ProductPage.selectSize(product.defaultSize);
    ProductPage.selectColor(product.defaultColor);
    ProductPage.buyButtonShouldBeEnabled();
    
    ProductPage.addToCart();

    // Clica no botão do carrinho no header
    Header.clickCartButton();

    // Verifica o dropdown
    Header.cartDropdownShouldBeVisible();
    Header.cartDropdownShouldHaveItems();

    // Navega para o carrinho pelo dropdown
    Header.clickViewCart();
    CartPage.shouldBeVisible();
  });

  it('Deve adicionar múltiplos produtos ao carrinho', () => {
    const product1 = products.ingridRunningJacket;
    const product2 = products.augustaPulloverJacket;

    // Adiciona primeiro produto
    HomePage.clickFirstProduct();
    ProductPage.shouldBeVisible();
    
    // Seleciona tamanho e cor (OBRIGATÓRIO)
    ProductPage.selectSize(product1.defaultSize);
    ProductPage.selectColor(product1.defaultColor);
    ProductPage.buyButtonShouldBeEnabled();
    ProductPage.addToCart();

    // Volta para a home
    Header.clickLogo();
    HomePage.shouldBeVisible();

    // Adiciona segundo produto
    HomePage.clickProduct(product2.name);
    ProductPage.shouldBeVisible();
    
    // Seleciona tamanho e cor (OBRIGATÓRIO)
    ProductPage.selectSize(product2.defaultSize);
    ProductPage.selectColor(product2.defaultColor);
    ProductPage.buyButtonShouldBeEnabled();
    ProductPage.addToCart();

    // Verifica quantidade no carrinho
    Header.shouldHaveCartCount(2);

    // Vai para o carrinho
    Header.clickCartButton();
    Header.clickViewCart();

    // Verifica ambos os produtos
    CartPage.shouldContainProduct(product1.name);
    CartPage.shouldContainProduct(product2.name);
    CartPage.getItemCount().should('eq', 2);
  });
});

