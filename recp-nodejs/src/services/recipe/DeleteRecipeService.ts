import { getCustomRepository } from 'typeorm'
import { RecipesRepositories } from '../../repositories/RecipesRepositories'

export class DeleteRecipeService {
  async execute(recipeId: string) {
    const recipesRepositories = getCustomRepository(RecipesRepositories)

    await recipesRepositories.delete(recipeId)
  }
}
