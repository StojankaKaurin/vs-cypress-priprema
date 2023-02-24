
/// <reference types="Cypress" />

import { loginPage } from "../page.object/loginPagePOM";

const credetials = {
    email: "kaurinstojanka@gmail.com",
    password: "Kursevi1"
};

describe("Login page test", () => {

    it("Valid Login", () => {
        cy.visit("/");
        cy.url().should("include","/login");
        loginPage.loginPageHeading.should("be.visible");
        loginPage.loginPageHeading.should("have.text", "Log in with your existing account")
        loginPage.login(credetials.email, credetials.password);
    });

});

