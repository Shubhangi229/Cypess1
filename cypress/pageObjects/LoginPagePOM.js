class LoginPagePOM {
 getUsername(){
    return cy.get('input[name="name"]:nth-child(2)')
 }

 getEmail(){
    return cy.get('input[name="email"]')
 }

 getPasword(){
    return cy.get('#exampleInputPassword1')
 }

 getCheckbox(){
    return cy.get('#exampleCheck1')
 }

 getGender(){
    return cy.get('#exampleFormControlSelect1')
 }

 checkCheckbox3(){
    return cy.get('input[value="option3"]')
 }

 getDate(){
    return cy.get('input[name="bday"]')
 }

 getSubmitBtn(){
    return cy.get('input[value="Submit"]')
 }

 getSuccessMsg(){
    return cy.get('.alert.alert-success.alert-dismissible')
 }
}
	
export default LoginPagePOM