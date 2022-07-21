class CheckOutPOM{
getCountry(){
    return cy.get('#country')
}
getCountryName(){
    return cy.get('div .suggestions ul li a')
}

getCheckBox(){
     return cy.get('.checkbox.checkbox-primary label')
}

getCheckedBoxStatus(){
    return cy.get('.checkbox.checkbox-primary label a')
}

getPurchaseBtn(){
    return cy.get('.btn.btn-success.btn-lg')
}

getSuccesfulMessage(){
    return cy.get('.alert.alert-success.alert-dismissible')
}
}
export default CheckOutPOM