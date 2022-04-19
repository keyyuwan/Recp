import { Request, Response } from 'express'
import { CreateRecipeService } from '../../services/recipe/CreateRecipeService'

export class CreateRecipeController {
  async handle(req: Request, res: Response) {
    const {
      name,
      image,
      description,
      ingredients,
      preparation_steps,
      country_id,
    } = req.body

    const userSub = <string>req.headers['sub']

    const createRecipeService = new CreateRecipeService()

    const recipe = await createRecipeService.execute({
      name,
      image,
      description,
      ingredients,
      preparation_steps,
      country: country_id,
      userSub,
    })

    return res.json(recipe)
  }
}
