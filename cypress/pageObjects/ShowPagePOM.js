class ShowPagePOM{
    getShowBtn(){
       return cy.get('.navbar.navbar-expand-sm.bg-dark.navbar-dark ul li:nth-child(2)')
    }

    getItems(){
        return cy.get('.col-lg-9 .row .col-lg-3')
    }

    getItemAddBtn(){
        return cy.get('.col-lg-9 .row .col-lg-3 .btn')
    }

    getItenName(){
        return cy.get('.col-lg-9 .row .col-lg-3 .card-body .card-title a')
    }

    getCart(){
        return cy.get('.nav-link.btn.btn-primary')
    }

}

export default ShowPagePOM