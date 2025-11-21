import { myAccountSelectors } from '../selectors/myAccount.selectors'

class MyAccount {

    /**
       * Redireciona para página de conta do usuário (login/registro)
       */
    goToMyAccountPage() {
        cy.get(myAccountSelectors.btnGoToMyAccount).click();
    }

    /**
     * Registra um novo usuário
     * @param {string} email - Email do usuário
     * @param {string} password - Senha do usuário
     */
    registerNewUser(email, password) {
        cy.get(myAccountSelectors.inputRegisterEmailAddress).type(email);
        cy.get(myAccountSelectors.inputRegisterPassword).type(password);
        cy.get(myAccountSelectors.btnRegister).click();
    }


    /**
     * Realiza login de um usuário válido
     * @param {string} email - Email válido do usuário
     * @param {string} password - Senha válida do usuário
     */
    login(email, password) {
        cy.get(myAccountSelectors.inputLoginUsername).type(email);
        cy.get(myAccountSelectors.inputLoginPassword).type(password);
        cy.get(myAccountSelectors.btnLogin).click();
    }

    /**
     * Realiza Logout (Sai da página "Minha Conta")
     */
    logout() {
        cy.get(myAccountSelectors.btnLogout).click();
        cy.url().should('include', Cypress.config('baseUrl'));
    }


    /**
     * Verifica se o usuário foi registrado com sucesso e redirecionado para página "Minha Conta"
     * @param {string} email - Email do usuário
     */
    shouldVerifyMyAccountPage(email) {
        cy.get(myAccountSelectors.myAccountPageHeader).should('have.text', 'Minha conta')
        cy.get(myAccountSelectors.myAccountHeader).should('contain.text', email.split('@')[0].toLowerCase());
    }


    /**
     * Tenta realizar login deixando o campo de Password vazio
     * @param {string} email - Email válido do usuário
     * @param {string} mensagemErroSenhaVazia - Mensagem de erro
     */
    tryLoginWithPasswordEmpty(email, mensagemErroSenhaVazia) {
        cy.get(myAccountSelectors.inputLoginUsername).type(email);
        cy.get(myAccountSelectors.btnLogin).click();
        cy.get(myAccountSelectors.erroMensageMyAccount).should('contain.text', 'Erro').and('contain.text', mensagemErroSenhaVazia);
    }


    /**
     * Tenta realizar login deixando o campo de Username/Email vazio
     * @param {string} password - Senha válida do usuário
     * @param {string} mensagemErroUsernameVazio - Mensagem de erro
     */
    tryLoginWithUsernameEmpty(password, mensagemErroUsernameVazio) {
        cy.get(myAccountSelectors.inputLoginPassword).type(password);
        cy.get(myAccountSelectors.btnLogin).click();
        cy.get(myAccountSelectors.erroMensageMyAccount).should('contain.text', 'Erro').and('contain.text', mensagemErroUsernameVazio);
    }

    /**
     * Tenta realizar login inserindo uma senha inválida para uma conta já cadastrada
     * @param {string} email - Email válido do usuário
     * @param {string} password - Senha inválida do usuário
     * @param {string} mensagemErroSenhaErrada - Mensagem de erro
     */
    tryLoginWithWrongPassword(email, password, mensagemErroSenhaErrada) {
        cy.get(myAccountSelectors.inputLoginUsername).type(email);
        cy.get(myAccountSelectors.inputLoginPassword).type(password);
        cy.get(myAccountSelectors.btnLogin).click();
        cy.get(myAccountSelectors.erroMensageMyAccount).should('contain.text', 'Erro').and('contain.text', mensagemErroSenhaErrada);
    }


    /**
     * Tenta realizar login inserindo um Username/Email inválido (não cadastrado)
     * @param {string} email - Email inválido do usuário
     * @param {string} password - Senha válida do usuário
     * @param {string} mensagemErroUsuarioErrado - Mensagem de erro
     */
    tryLoginWithWrongUsername(email, password, mensagemErroUsuarioErrado) {
        cy.get(myAccountSelectors.inputLoginUsername).type(email);
        cy.get(myAccountSelectors.inputLoginPassword).type(password);
        cy.get(myAccountSelectors.btnLogin).click();
        cy.get(myAccountSelectors.erroMensageMyAccount).should('contain.text', 'Erro').and('contain.text', mensagemErroUsuarioErrado);
    }

}

export default new MyAccount();