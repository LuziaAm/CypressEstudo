
import signup from '../pages/SignupPage'

describe('singup', () => {

    //Usando gancho para pegar massa de dados JSON
    beforeEach(function(){
        //EXECUTA
        cy.fixture('delivery').then((dados) =>{
            this.delivery = dados
        })
    })

    it('User should be deliver', function() {
        signup.go()
        signup.fillForm(this.delivery.signup)
        signup.submit()
        //Precisa estar na ordem por ser procedural
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)


    })

    it('Incorrect document', function(){
        //Precisa estar na ordem por ser procedural        
        signup.go()
        signup.fillForm(this.delivery.cpf_inv)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })

    it('Incorrect email', function(){        
        signup.go()
        signup.fillForm(this.delivery.email_inv)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })
})