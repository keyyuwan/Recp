import { Request, Response } from 'express'
import { GetRecipeService } from '../../services/recipe/GetRecipeService'

export class GetRecipeController {
  async handle(req: Request, res: Response) {
    const { id } = req.params

    const getRecipeService = new GetRecipeService()

    const recipe = await getRecipeService.execute(id)

    return res.json(recipe)
  }
}
