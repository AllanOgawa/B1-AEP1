//18 - importando os TIPOS Request e Response do express
import { Request, Response } from 'express'

//19 - criando a classe HealthCheckController
class HealthCheckController{
    //20 - criando um metodo publico e assincrono chamado check que recebe como parametro (inferido) uma req do tipo rRequest
    //     e uma res do tipo Response
    public async check(req: Request, res: Response) {
        //21 - retornando um json exrito Hello World para quem chamou esse metodo
        return res.json('Hello World')
    }

}

//22 - expotando a classe ja instanciada
export default new HealthCheckController()