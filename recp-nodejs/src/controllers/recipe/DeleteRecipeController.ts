import { Request, Response } from 'express'
import { DeleteRecipeService } from '../../services/recipe/DeleteRecipeService'

export class DeleteRecipeController {
  async handle(req: Request, res: Response) {
    const { id } = req.body

    const deleteRecipeService = new DeleteRecipeService()

    await deleteRecipeService.execute(id)

    return res.status(200).end()
  }
}
