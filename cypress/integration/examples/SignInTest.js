/// <reference types = "cypress"/>
import LoginPagePOM from "../../pageObjects/LoginPagePOM"
import LoginCredentials from "../../fixtures/LoginCredentials.json"



describe('My First Test', () => {

    before(function() {
       cy.fixture('LoginCredentials').then(function(data){
        this.data = data
       })
       
    })


    it('Visits the Sign In page', function() {
      const login = new LoginPagePOM()
      cy.visit(Cypress.env("login_url"))

      this.data.forEach(function($e1,index1,length){
        console.log($e1)
        $e1.username.forEach(function($e2,index,length) {
          const name = login.getUsername()
          
          if(index === 2){
           
            name.type($e2)
          }
          
        })
      login.getEmail().type($e1.email)
      login.getPasword().type($e1.password)
      //login.getCheckbox().should('not.be.checked')
      //login.getCheckbox().check().should('be.checked')
      login.getGender().select($e1.gender)
      login.checkCheckbox3().should('be.disabled')
      login.getDate().type($e1.date)
      login.getSubmitBtn().click();
      login.getSuccessMsg().then(element => {
        const txt = element.text
        expect(txt,"Success! The Form has been submitted successfully!.")
      })
      })


     

      
    })
  })