import { Request, Response } from 'express'

class userController{
    public async list(req: Request, res: Response) {
        return res.json('allan ogawa')
    }

}

export default new userController()