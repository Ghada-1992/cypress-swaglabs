/// <reference types="cypress" />

export class HomePage {

    shoppingCart = '.shopping_cart_link';
    inventoryList = '.inventory_list';
    menuButton = '#react-burger-menu-btn';
    menuItems = '.menu-item'
    logoutLink = '#logout_sidebar_link';
    aboutLink = '#about_sidebar_link';

    getMenuButton() {
        return cy.get(this.menuButton);
    }

    clickMenuButton() {
        this.getMenuButton().click();
    }

    clickLogoutLink() {
        cy.get(this.logoutLink)
            .click();
    }

    clickAboutLink() {
        cy.get(this.aboutLink)
            .click();
    }

    getMenuItems() {
        return cy.get(this.menuItems);
    }
  
  }
  