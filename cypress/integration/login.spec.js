/// <reference types="cypress" />

const data = require("../fixtures/test-data.json");
const text = require("../fixtures/text.js");

import { HomePage } from "../support/page-objects/home-page";
import { LoginPage } from "../support/page-objects/login-page";

describe("Login Functionality Tests", () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  beforeEach(() => {
    cy.visit("");
    loginPage.getLoginLogo().should("be.visible");
  });

  it("Verify that a locked user cannot login to the system", () => {
    loginPage.enterUsername(data.lockedOutUsername);
    loginPage.enterPassword(data.password);
    loginPage.clickSubmit();
    loginPage
      .getErrorMessage()
      .should("be.visible")
      .and("have.text", text.text_lockedOutUserErrorMessage);
  });

  it("Verify User cannot login without a username", () => {
    loginPage.enterPassword(data.password);
    loginPage.clickSubmit();
    loginPage
      .getErrorMessage()
      .should("be.visible")
      .and("have.text", text.text_requiredUsernameErrorMessage);
  });

  it("Verify User cannot login without a password", () => {
    loginPage.enterUsername(data.username);
    loginPage.clickSubmit();
    loginPage
      .getErrorMessage()
      .should("be.visible")
      .and("have.text", text.text_requiredPasswordErrorMessage);
  });

  it("Verify User can login with correct credentials", () => {
    loginPage.enterUsername(data.username);
    loginPage.enterPassword(data.password);
    loginPage.clickSubmit();
    cy.url().should("eq", Cypress.config().baseUrl + data.inventoryPagePath);
    homePage.getShoppingCart().should("be.visible");
    homePage.getInventoryList().should("be.visible");
  });

});
