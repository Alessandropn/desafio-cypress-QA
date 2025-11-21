# README.md

## 📦 Instalação das Dependências

Para instalar todas as dependências necessárias para executar o projeto:

``` bash
npm install
```

Ou, se estiver utilizando **Yarn**:

``` bash
yarn install
```

Certifique-se de que o Node.js está instalado em sua máquina.

------------------------------------------------------------------------

## ▶️ Como Rodar os Testes

Para executar todos os testes automatizados:

``` bash
npx cypress open
```

Isso abrirá a interface gráfica do Cypress, permitindo rodar os testes
manualmente.

Se preferir rodar no modo headless:

``` bash
npx cypress run
```

------------------------------------------------------------------------

## 🧪 Cenários Automatizados

A seguir está a lista de todos os cenários presentes nos testes,
acompanhados de uma breve justificativa da escolha de cada um.

------------------------------------------------------------------------

# 📁 Testes de Carrinho (`cart.cy.js`)

### **1. Deve adicionar um produto ao carrinho com sucesso**

Garante que o fluxo principal de compra funciona, incluindo seleção de
variações e atualização visual do carrinho.

### **2. Deve navegar para o carrinho e verificar o produto adicionado**

Valida que o produto foi corretamente persistido e exibido no carrinho
após a inclusão.

### **3. Deve atualizar a quantidade do produto no carrinho**

Confirma que o usuário pode alterar quantidades, comportamento essencial
para compras reais.

### **4. Deve remover um produto do carrinho**

Assegura que o carrinho permite remoção e limpa corretamente o estado.

### **5. Deve verificar o dropdown do carrinho no header**

Cobre a experiência rápida de visualizar o resumo do carrinho sem sair
da página atual.

### **6. Deve adicionar múltiplos produtos ao carrinho**

Valida cálculos, contagem e consistência ao lidar com vários itens
simultaneamente.

------------------------------------------------------------------------

# 👤 Testes de Conta do Usuário (`myAccount.cy.js`)

### **1. Deve registrar um novo usuário com sucesso**

Garante que o fluxo de criação de contas está funcional e aceitando
novos cadastros.

### **2. Deve fazer login com um usuário cadastrado e depois realizar logout**

Valida autenticação e sessão do usuário, pontos críticos de segurança.

### **3. Não deve ser possível fazer login deixando o campo de Username vazio**

Cobre validações básicas de formulário, prevenindo erros de UX.

### **4. Não deve ser possível fazer login deixando o campo de Senha vazio**

Assegura que o backend e o frontend recusam credenciais incompletas.

### **5. Não deve ser possível fazer login com email incorreto**

Valida proteção contra tentativas com usuários inexistentes.

### **6. Não deve ser possível fazer login com senha incorreta**

Garante que o sistema diferencia senhas inválidas de emails válidos.

------------------------------------------------------------------------

## 📘 Sobre os Cenários Escolhidos

Esses cenários cobrem os principais fluxos críticos de um e-commerce: -
Cadastro e autenticação de usuários - Interação completa com o carrinho
de compras - Validações essenciais para evitar comportamentos
indevidos - Fluxos principais usados por qualquer usuário real

O conjunto foi pensado para garantir confiabilidade, evitar regressões e
validar comportamentos reais da aplicação.
