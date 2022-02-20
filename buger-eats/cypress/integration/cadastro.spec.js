

describe('Cadastro', ()=>{
    it('Usuario deve se tornar um empregador', ()=>{
        cy.viewport(1440, 900) //viewport redimenciona a tamanho da janela
        cy.visit('https://buger-eats.vercel.app/') // visit acessa a página principal alvo do teste


        cy.get('a[href="/deliver"]').click() // click com localizador do botão
        cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas') // Chack poit para garantir o redirecionamento da página

        let entregador = {
            nome: 'Luzia Amorim',
            cpf: '71162253300',
            email: 'luzia@gmail.com',
            whatsapp: '92987654321',
            endereco: {
                cep: '69036100',
                rua: 'Rua Teófilo Dias',
                numero: '3',
                complemento:'Av Principal',
                bairro:'Compensa',
                cidade_uf: 'Manaus/AM'
            },
            metodo_entrega: 'Moto',
            cnh: 'IMG-20220202-WA0002.jpg'
        }

        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('input[type=button][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)

        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
        cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)

        cy.contains('.delivery-method li', entregador.metodo_entrega).click()

        cy.get('input[accept^="image"]').attachFile('/images/' + entregador.cnh)

        cy.get('form button[type=submit]').click()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        cy.get('.swal2-container .swal2-html-container')
            .should('have.text', expectedMessage)    


    })
})