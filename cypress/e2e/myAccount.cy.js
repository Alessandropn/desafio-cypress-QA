import HomePage from '../pages/HomePage';
import MyAccount from '../pages/MyAccount';
import messages from '../fixtures/messages.json';
import user from '../fixtures/user.json';
import { faker } from '@faker-js/faker';

describe('Fluxo de Conta do Usuário', () => {

    beforeEach(() => {
        // Visita a página inicial antes de cada teste
        HomePage.visit();

        // Redireciona para página de conta do usuário (login/registro)
        MyAccount.goToMyAccountPage();
    });

    it('Deve registrar um novo usuário com sucesso', () => {

        const email = faker.internet.email(); const password = 'password@test';

        // Registra um novo usuário
        MyAccount.registerNewUser(email, password);

        // Verifica se o usuário foi registrado com sucesso e redirecionado para página "Minha Conta"
        MyAccount.shouldVerifyMyAccountPage(email);
    });

    it('Deve fazer login com um usuário cadastrado com sucesso e depois realizar logout', () => {

        const email = user.valid.email; const password = user.valid.password;

        // Faz Login com Usuário válido já cadastrado
        MyAccount.login(email, password);

        // Verifica se o usuário foi registrado com sucesso e redirecionado para página "Minha Conta"
        MyAccount.shouldVerifyMyAccountPage(email);
        
        // Realizar Logout (sai da conta)
        MyAccount.logout();
    });

    it('Não deve ser possível fazer login deixando o campo de Username vazio', () => {
        const password = 'password@test'; const mensagemErroUsernameVazio = messages.errors.usernameEmpty;

        // Tenta logar deixando o campo de Username/Email vazio
        MyAccount.tryLoginWithUsernameEmpty(password, mensagemErroUsernameVazio);
    });

    it('Não deve ser possível fazer login deixando o campo de Senha vazio', () => {
        const email = user.valid.email; const mensagemErroSenhaVazia = messages.errors.passwordEmpty;

        // Tenta logar deixando o campo de Password vazio
        MyAccount.tryLoginWithPasswordEmpty(email, mensagemErroSenhaVazia);
    });


    it('Não deve ser possível fazer login inserindo um email não cadastrado', () => {
        const email = user.invalid.email; const password = user.valid.password; const mensagemErroUsuarioErrado = messages.errors.invalidEmail;

        // Tenta logar inserindo um Username/Email inválido (não cadastrado)
        MyAccount.tryLoginWithWrongUsername(email, password, mensagemErroUsuarioErrado);
    });


    it('Não deve ser possível fazer login inserindo uma senha inválida', () => {
        const email = user.valid.email; const password = user.invalid.password; const mensagemErroSenhaErrada = messages.errors.invalidPassword;

        // Tenta logar inserindo uma senha inválida para uma conta já cadastrada
        MyAccount.tryLoginWithWrongPassword(email, password, mensagemErroSenhaErrada);
    });
});