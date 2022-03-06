
import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('singup', () => {

    //Usando gancho para pegar massa de dados JSON
    // beforeEach(function(){
    //     //EXECUTA
    //     cy.fixture('delivery').then((dados) =>{
    //         this.delivery = dados
    //     })
    // })

    it('User should be deliver', function() {

        var deliver = signupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        //Precisa estar na ordem por ser procedural
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)


    })

    it('Incorrect document', function(){

        var deliver = signupFactory.deliver()

        deliver.cpf = '714065234aa'

        //Precisa estar na ordem por ser procedural        
        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })

    it('Incorrect email', function(){ 
        
        var deliver = signupFactory.deliver()

        deliver.email = 'luzia.amorim.gmil.com'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })
})