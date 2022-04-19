import { Request, Response } from 'express'
import { GetUserService } from '../../services/user/GetUserService'

export class GetUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params

    const getUserService = new GetUserService()

    const user = await getUserService.execute(id)

    return res.json(user)
  }
}
