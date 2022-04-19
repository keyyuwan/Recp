import { getCustomRepository } from 'typeorm'
import { RecipesRepositories } from '../../repositories/RecipesRepositories'

export class GetRecipesService {
  async execute() {
    const recipesRepositories = getCustomRepository(RecipesRepositories)

    const recipes = await recipesRepositories.find({
      relations: ['userOwner', 'countryOwner'],
    })

    const recipesFormated = recipes.map((recipe) => ({
      ...recipe,
      ingredients: JSON.parse(recipe.ingredients),
      preparation_steps: JSON.parse(recipe.preparation_steps),
    }))

    return recipesFormated
  }
}
