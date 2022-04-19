import { Request, Response } from 'express'
import { GetRecipesService } from '../../services/recipe/GetRecipesService'

export class GetRecipesController {
  async handle(req: Request, res: Response) {
    const getRecipesService = new GetRecipesService()

    const recipes = await getRecipesService.execute()

    return res.json(recipes)
  }
}
