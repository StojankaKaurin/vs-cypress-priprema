class AddOrganization {
    
    get addNew() {
        return cy.get("vs-c-icon");
    }

    get newBoard(){
        return cy.get("h2");
    }

    get myorganizationInput() {
       return cy.get(".el-input__icon").eq(0);
    }

    get boardtitleInput() {
     return cy.get(".el-form-item__label").eq(1);
    }

    get nextButton() {
       return cy.get("el-button").eq(0);
    }


    addorganization(myorganization, name) {
        this.addNew.click();
        this.myorganizationBtn.click();
        this.nameInput.type(name);
        this.loginBtn.click();
    }

}

export const AddOrganization = new AddOrganization ();