# Estrutura de Automação Cypress - Fluxo de Carrinho

Este projeto implementa automação de testes para o fluxo de carrinho da loja EBAC, seguindo boas práticas de Page Object Modeling e Locators Modeling.

## 📁 Estrutura de Pastas

```
cypress/
├── e2e/                    # Testes end-to-end
│   └── cart.cy.js         # Testes do fluxo de carrinho
├── fixtures/               # Dados de teste (JSON)
│   ├── messages.json      # Mensagens esperadas do sistema
│   ├── user.json          # Dados de usuário
│   └── products.json      # Dados de produtos
├── pages/                  # Page Objects
│   ├── HomePage.js        # Page Object da página inicial
│   ├── ProductPage.js     # Page Object da página de produto
│   ├── CartPage.js        # Page Object da página do carrinho
│   └── Header.js          # Page Object do cabeçalho
├── selectors/              # Locators/Selectors
│   ├── homePage.selectors.js
│   ├── productPage.selectors.js
│   ├── cartPage.selectors.js
│   └── header.selectors.js
└── support/               # Arquivos de suporte
    ├── commands.js
    └── e2e.js
```

## 🎯 Boas Práticas Implementadas

### 1. **Locators Modeling**
- Todos os selectors estão centralizados na pasta `selectors/`
- Cada página possui seu próprio arquivo de selectors
- Selectors são exportados como objetos nomeados para fácil manutenção

### 2. **Page Object Modeling**
- Cada página possui sua própria classe Page Object
- Métodos encapsulam ações e verificações
- Page Objects são exportados como instâncias únicas (singleton)

### 3. **Fixtures para Dados de Teste**
- `messages.json`: Mensagens esperadas do sistema
- `user.json`: Dados de usuário válidos e inválidos
- `products.json`: Informações dos produtos (nome, preço, variações)

## 📝 Como Usar

### Executar os Testes

```bash
# Executar todos os testes
npx cypress run

# Executar em modo interativo
npx cypress open

# Executar um arquivo específico
npx cypress run --spec "cypress/e2e/cart.cy.js"
```

### Exemplo de Uso dos Page Objects

```javascript
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';

// Navegar para a home
HomePage.visit();

// Clicar em um produto
HomePage.clickFirstProduct();

// Selecionar variações e adicionar ao carrinho
ProductPage.selectSize('M');
ProductPage.selectColor('White');
ProductPage.addToCart();

// Verificar o carrinho
CartPage.visit();
CartPage.shouldHaveItems();
```

## 🔍 Selectors

Os selectors foram identificados através de debug do site e estão organizados por página:

- **HomePage**: Produtos, links de navegação
- **ProductPage**: Variações (tamanho, cor), quantidade, botão comprar
- **CartPage**: Tabela de itens, quantidade, remoção, cupons
- **Header**: Carrinho, busca, menu de navegação

## 📦 Fixtures

### messages.json
Contém todas as mensagens esperadas do sistema:
- Mensagens de carrinho (produto adicionado, carrinho vazio, etc.)
- Mensagens de produto (estoque, opções)
- Mensagens de checkout
- Mensagens de erro

### user.json
Dados de usuário para testes:
- Usuário válido
- Usuário inválido
- Dados para checkout

### products.json
Informações dos produtos:
- Nome, slug, preço, SKU
- Tamanhos e cores disponíveis
- Valores padrão para testes

## 🚀 Próximos Passos

1. Adicionar mais cenários de teste
2. Implementar testes de checkout
3. Adicionar testes de busca
4. Implementar testes de wishlist
5. Adicionar relatórios de teste

