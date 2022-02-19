

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
            whatsapp: '92987654321'
        }

        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)




    })
})