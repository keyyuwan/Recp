import { getCustomRepository } from 'typeorm'
import { RecipesRepositories } from '../../repositories/RecipesRepositories'
import { UserRepositories } from '../../repositories/UserRepositories'

export class GetUserService {
  async execute(userId: string) {
    const userRepositories = getCustomRepository(UserRepositories)
    const recipesRepositories = getCustomRepository(RecipesRepositories)

    const user = await userRepositories.findOne(userId)

    const recipes = await recipesRepositories.find({
      where: {
        user: user?.id,
      },
      relations: ['countryOwner', 'userOwner'],
    })

    const fullUserData = {
      ...user,
      recipes,
    }

    return fullUserData
  }
}
