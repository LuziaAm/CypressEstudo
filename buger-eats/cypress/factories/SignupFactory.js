const faker =  require('faker')
const cpf = require('gerador-validador-cpf')

//Criar um módulo

export default{

    deliver: function(){

        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()

        let data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
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

        return data
    }
}