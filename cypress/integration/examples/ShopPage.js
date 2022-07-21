/// <reference types = "cypress" />

import ShowPagePOM from "../../pageObjects/ShowPagePOM"
import SelectItems from "../../fixtures/SelectItems.json"
//var data1;
 

describe('Validate all basic funcationality of Website', () => {
    const showPage = new ShowPagePOM()

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
       // console.log(this.data1)
        showPage.getCart().then(function(element){
            const cartText = element.text()
            const s1 = cartText.split('(')
            const s2 = s1[1].split(')')
            
            expect(parseInt(s2[0]),this.data1.items.length)
            
          })

    })
   

})
