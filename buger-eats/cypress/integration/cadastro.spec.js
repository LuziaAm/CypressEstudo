
import SingupPage from '../pages/SignupPage'

describe('Cadastro', () => {
    it('Usuario deve se tornar um empregador', () => {

        let delivery = {
            name: 'Luzia Amorim',
            cpf: '71162253300',
            email: 'luzia@gmail.com',
            whatsapp: '92987654321',
            adress: {
                postalcode: '69036100',
                street: 'Rua Teófilo Dias',
                number: '3',
                details: 'Av Principal',
                district: 'Compensa',
                city_state: 'Manaus/AM'
            },
            delivery_methodo: 'Moto',
            cnh: 'IMG-20220202-WA0002.jpg'
        }

        const signup = new SingupPage()

        signup.go()
        signup.fillForm(delivery)
        signup.submit()
        //Precisa estar na ordem por ser procedural
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)


    })

    it('CPF Incorreto', () => {
        cy.viewport(1440, 900) //viewport redimenciona a tamanho da janela
        cy.visit('https://buger-eats.vercel.app/') // visit acessa a página principal alvo do teste


        cy.get('a[href="/deliver"]').click() // click com localizador do botão
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas') // Chack poit para garantir o redirecionamento da página

        let delivery = {
            name: 'Luzia Amorim',
            cpf: '711622533AA',
            email: 'luzia@gmail.com',
            whatsapp: '92987654321',
            adress: {
                postalcode: '69036100',
                street: 'Rua Teófilo Dias',
                number: '3',
                details: 'Av Principal',
                district: 'Compensa',
                city_state: 'Manaus/AM'
            },
            delivery_methodo: 'Moto',
            cnh: 'IMG-20220202-WA0002.jpg'
        }

        const signup = new SingupPage()

        signup.go()
        signup.fillForm(delivery)
        signup.submit()
        //Precisa estar na ordem por ser procedural
        const expectedMessage = 'Oops! CPF inválido'
        signup.alertMessageShouldBe(expectedMessage)
    })
})