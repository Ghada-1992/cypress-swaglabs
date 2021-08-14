/// <reference types="cypress" />

export class LoginPage {

    usernameField = '[data-test=username]';
    passwordField = '[data-test=password]';
    loginButton   = '[data-test=login-button]';
    loginLogo     = '.login_logo'
    errorMessage  = '[data-test=error]';
   
    getUsernameField() {
      return cy.get(this.usernameField);
    }

    getPasswordField(username) {
      return cy.get(this.passwordField);
    }

    getLoginButton() {
      return cy.get(this.loginButton);
    }

    getLoginLogo() {
      return cy.get(this.loginLogo);
    }
    
    enterUsername(username) {
      this.getUsernameField()
            .type(username)
    }
  
    enterPassword(password) {
      this.getPasswordField()
            .type(password);
    }
  
    clickSubmit() {
      this.getLoginButton()
            .click();
    }

    signIn(username, password) {
      this.enterUsername(username);
      this.enterPassword(password);
      this.clickSubmit();
    }

    getErrorMessage(){
      return cy.get(this.errorMessage);
    }
  
  }
  