class CartPagePOM{
    getToCartBtn(){
        return cy.get('table table-hover')
    }
    getAllprice(){
        return cy.get('.table.table-hover tbody tr td:nth-child(4) strong')
    }

    getTotalprice(){
        return cy.get('.table.table-hover tbody tr:nth-child(4) td:nth-child(5) h3 strong')
    }

    getCheckOutBtn(){
        return cy.get('.btn.btn-success')
    }

    
}
export default CartPagePOM