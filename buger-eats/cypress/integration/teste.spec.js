

describe('Cadastro', ()=>{
    it('Open Page', ()=>{
        cy.viewport(1440, 900) //viewport redimenciona a tamanho da janela
        cy.visit('https://www.discourse.org/') // visit acessa a página principal alvo do teste


        cy.contains('.wrapper ul li ', 'Demo').click()

        cy.get('.title h1').should('have.text', 'Demo') 

        //cy.get('.wrapper li  [href="https://try.discourse.org"]"]').click() // click com localizador do botão
        //cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas') // Chack poit para garantir o redirecionamento da página
    })
})