/// <reference types = "cypress" />
import ShowPagePOM from "../../pageObjects/ShowPagePOM"
import CartPagePOM from "../../pageObjects/CartPagePOM"
import CheckOutPOM from "../../pageObjects/CheckOutPOM"
import SelectItems from "../../fixtures/SelectItems.json"

describe('Cart Page Test',() => {
    const showPage = new ShowPagePOM()
    const cartPage = new CartPagePOM()
    const checkOutPage = new CheckOutPOM()
    
    before(function(){
        cy.visit(Cypress.env("login_url"))
    })
   
    beforeEach(function() {
       
        
        cy.fixture('SelectItems').then((data) =>{
             this.data1 = data
    
        })
        
       })
    it('select cart items',function()  {
        showPage.getShowBtn().click()
        showPage.getItenName().each((e1,index,length) => {
 
                this.data1.items.forEach(function(elements){
                    if(e1.text().includes(elements)){
                        showPage.getItemAddBtn().eq(index).click()
                    }
                   
                })
    
        })
    })
    it('Validate add to cart', function() {
       
        showPage.getCart().then(function(element){
            const cartText = element.text()
            const s1 = cartText.split('(')
            const s2 = s1[1].split(')')
            
            expect(parseInt(s2[0]),this.data1.items.length)
            
          })

    })

    it('switch to select items page', function() {
        showPage.getCart().click()
    })

    it('Verify the selected item price is same as total price',function(){
        var sum = 0
          cartPage.getAllprice().each((e1,index,length) => {
           var price = e1.text().split(" ")
           var p1 = price[1].trim()
          
           sum = Number(sum) + Number(p1)
           
          }).then(function(){
            cartPage.getTotalprice().then(function(element){
                assert(sum,element.text())
            })
            
           
          })
          
    })

    it('Click CheckOut Btn',function(){
        cartPage.getCheckOutBtn().click()
    })

    it('Verify select Correct Option',function(){
        checkOutPage.getCountry().type("India").then(function(){
            cy.wait(8000)
            checkOutPage.getCountryName().contains('India').click()
        })
       
        
    })

    it('Verify checkbox is unchecke and after select again verify the status',function(){
        checkOutPage.getCheckBox().should('not.be.checked')
        checkOutPage.getCheckBox().click()
        //cy.wait(5000)
        //checkOutPage.getCheckBox().should('have.prop', 'checked')
        //checkOutPage.getCheckBox().should('have.attr', 'checked')   
       // checkOutPage.getCheckBox().should('be.checked')
    })

    it('Click purchase Btn',function(){
        checkOutPage.getPurchaseBtn().click()
    })

    it('Verify the message popup after purchase',function(){
        checkOutPage.getSuccesfulMessage().then(function(element){
            assert(element.text(),"Success! Thank you! Your order will be delivered in next few weeks :-).")
        })
    })
})
