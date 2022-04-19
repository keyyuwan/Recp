import { getCustomRepository } from 'typeorm'
import { RecipesRepositories } from '../../repositories/RecipesRepositories'
import { UserRepositories } from '../../repositories/UserRepositories'

interface IRecipeRequest {
  name: string
  image: string
  description: string
  ingredients: string
  preparation_steps: string
  country: string
  userSub: string
}

export class CreateRecipeService {
  async execute({
    name,
    image,
    description,
    ingredients,
    preparation_steps,
    country,
    userSub,
  }: IRecipeRequest) {
    const recipesRepositories = getCustomRepository(RecipesRepositories)
    const usersRepositories = getCustomRepository(UserRepositories)

    const user = await usersRepositories.findOne({
      where: {
        sub: userSub,
      },
    })

    const recipe = recipesRepositories.create({
      name,
      image,
      description,
      ingredients,
      preparation_steps,
      user: user?.id,
      country,
    })

    await recipesRepositories.save(recipe)

    return recipe
  }
}
