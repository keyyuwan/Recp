import { getCustomRepository } from 'typeorm'
import { RecipesRepositories } from '../../repositories/RecipesRepositories'

export class GetRecipeService {
  async execute(recipeId: string) {
    const recipesRepositories = getCustomRepository(RecipesRepositories)

    const recipe = await recipesRepositories.findOne(recipeId, {
      relations: ['userOwner', 'countryOwner'],
    })

    const recipeFormated = {
      ...recipe,
      ingredients: JSON.parse(recipe!.ingredients),
      preparation_steps: JSON.parse(recipe!.preparation_steps),
    }

    return recipeFormated
  }
}
