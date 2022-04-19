import { Request, Response } from 'express'
import { CreateUserService } from '../../services/user/CreateUserService'

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, avatar, admin, sub } = req.body

    const createUserService = new CreateUserService()

    const user = await createUserService.execute({
      name,
      email,
      avatar,
      admin,
      sub,
    })

    return res.json(user)
  }
}
