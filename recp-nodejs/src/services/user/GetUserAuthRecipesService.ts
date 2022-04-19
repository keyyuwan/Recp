import { getCustomRepository } from 'typeorm'
import { RecipesRepositories } from '../../repositories/RecipesRepositories'

export class GetUserAuthRecipesService {
  async execute(sub: string) {
    const recipesRepositories = getCustomRepository(RecipesRepositories)

    const recipes = await recipesRepositories.find({
      where: {
        userOwner: {
          sub,
        },
      },
      relations: ['userOwner', 'countryOwner'],
    })

    return recipes
  }
}
