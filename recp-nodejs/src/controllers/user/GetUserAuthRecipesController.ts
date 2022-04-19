import { Request, Response } from 'express'
import { GetUserAuthRecipesService } from '../../services/user/GetUserAuthRecipesService'

export class GetUserAuthRecipesController {
  async handle(req: Request, res: Response) {
    const sub = <string>req.headers['sub']

    const getUserAuthRecipesService = new GetUserAuthRecipesService()

    const recipes = await getUserAuthRecipesService.execute(sub)

    return res.json(recipes)
  }
}
