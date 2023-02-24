///<reference types="Cypress" />

const { AddOrganization } = require("../page.object/addorganisationPOM");

describe("add organisation test", () =>{
    before("login on the page"), () => {

    }
    it("add oranisation ", () => {
        cy.visit("/");
        cy.url().should("include","/myoranizations");
        AddOrganization.addOrganizationPage.should("be.visible");
        AddOrganization.addOrganizationPage.should("have.text", "Add new")
    
    
    })
})