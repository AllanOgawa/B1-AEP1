//1 - importando o express
import express from 'express'
//23 - importando a constante routes
import routes from './routes'


import mongoose from 'mongoose'


//2- criando uma classe App, que ira conter as configurações da nossa API
class App {
    //3 - criando uma propriedade publica chamada express do TIPO express.Application (tipagem)
    public express: express.Application

    //4 - criando construtor
    public constructor() {
        //5 - atribuindo para a propriedade express uma instancia de express()
        //    quem utilizar dessa propriedade terá acesso aos metodos presentes dentro de express()
        this.express = express()

        //8 - forçando quem instanciar essa classe, a automaticamente executar o metodo middleware()
        this.middleware()


        //this.database()


        //26 - forçando quem instanciar essa classe, a automaticamente executar o metodo routes()
        //     e eassim as rotas serão criadas ao iniciar a aplicação
        this.routes()
    }

    //6 - criando um metodo chamado middleware
    public middleware(): void {
        //7 - utilizando atraves da propriedade express(que é uma instancia de express()), utilizando o metodo use() para dizer ao 
        //    express que as requisições e respostas serao no formato json
        this.express.use(express.json())
    }

    /*public async database() {
        try {
            await mongoose.connect('mongodb+srv://AllanOgawa:Al70273@cluster0.1wkq0rc.mongodb.net/?retryWrites=true&w=majority')
            console.log('Connect database Success')

        } catch (err) {
            console.error('Connect database Failed', err)
        }

    }*/

    //24 - criando um metodo publico chamado routes
    public routes(): void {
        //25 - usando o metodo use de express() para informar ao framework que este será o arquivo principal do sistema de roteamento
        this.express.use(routes)
    }
}

//9 - exportando a classe App ja instanciada e ja chamando o atributo express. Quem chamar essa classe, ja podera utilizar
//    os metodos que pertencem a express()
export default new App().express