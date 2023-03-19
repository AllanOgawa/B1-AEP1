//10 - importando a Classe App ja instanciada de app.ts
import app from "./app";

//11 - função main() que ira executar os metodos de app e iniciar nossa aplicação
//     Essa funcao é a primeira a ser executada na aplicação
function main() {
    try {
        //12 - utilizando o metodo listen de express() para criar um servidor, passando como parametro: a porta 3000,
        //     o dominio "localhost" e uma função assincrona e anonima, que irá printar uma mensagem ao ser executada
        app.listen(3000, 'localhost', async () => {
            console.log('starting server')
        })
    } catch (err) { 
        //no catch é capturado qualquer erro que possa acontecer ao criar o servidor e printando ele no console
        console.error('Starting server Error', err)
    }
}

//13 - execuntando a função main
main()

