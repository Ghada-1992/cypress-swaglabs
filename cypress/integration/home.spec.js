//// <reference types="cypress" />

 const data = require("../fixtures/test-data.json");
 const text = require("../fixtures/text.js");

 import { HomePage } from "../support/page-objects/home-page";
 import { LoginPage } from "../support/page-objects/login-page";

 describe("Home Page Tests", () => {
   const loginPage = new LoginPage();
   const homePage = new HomePage();

   beforeEach(() => {
     cy.visit("");
     loginPage.getLoginLogo().should("be.visible");
     loginPage.signIn(data.username, data.password);
   });

   it("Verify User can successfully logout from the application", () => {
     homePage.getMenuButton().should("be.visible");
     homePage.clickMenuButton();
     for (let val in data.menuItems) {
       homePage
         .getMenuItems()
         .eq(val)
         .should("be.visible")
         .and("have.text", data.menuItems[val]);
     }
     homePage.clickLogoutLink();
     cy.url().should("eq", Cypress.config().baseUrl);
     loginPage.getUsernameField().should("be.visible");
     loginPage.getPasswordField().should("be.visible");
     loginPage.getLoginButton().should("be.visible");
   });

   it('Verify that the application redirects to the "About" page', () => {
     homePage.getMenuButton().should("be.visible");
     homePage.clickMenuButton();
     for (let val in data.menuItems) {
       homePage
         .getMenuItems()
         .eq(val)
         .should("be.visible")
         .and("have.text", data.menuItems[val]);
     }
     homePage.clickAboutLink();
     cy.url().should("eq", data.aboutRedirectionUrl);
   });

 });
