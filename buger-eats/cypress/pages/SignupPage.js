
class SingupPage{

    go(){
        //viewport redimenciona a tamanho da janela esta em cypress.json
        cy.visit('/') // visit acessa a página principal alvo do teste | Url está em cypress.json


        cy.get('a[href="/deliver"]').click() // click com localizador do botão
        cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas') // Chack poit para garantir o redirecionamento da página

    }

    fillForm(delivery){
        cy.get('input[name="name"]').type(delivery.name)
        cy.get('input[name="cpf"]').type(delivery.cpf)
        cy.get('input[name="email"]').type(delivery.email)
        cy.get('input[name="whatsapp"]').type(delivery.whatsapp)

        cy.get('input[name="postalcode"]').type(delivery.adress.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(delivery.adress.number)
        cy.get('input[name="address-details"]').type(delivery.adress.details)

        cy.get('input[name="address"]').should('have.value', delivery.adress.street)
        cy.get('input[name="district"]').should('have.value', delivery.adress.district)
        cy.get('input[name="city-uf"]').should('have.value', delivery.adress.city_state)

        cy.contains('.delivery-method li', delivery.delivery_methodo).click()
        cy.get('input[accept^="image"]').attachFile('/images/' + delivery.cnh)

    }
    submit(){
        cy.get('form button[type=submit]').click()

    }

    modalContentShouldBe(expectedMessage){
        cy.get('.swal2-container .swal2-html-container')
            .should('have.text', expectedMessage)    

    }

    alertMessageShouldBe(expectedMessage){
        cy.get('.field-group div span').should('have.text', expectedMessage)
    }
}

export default SingupPage;