import { getCustomRepository } from 'typeorm'
import { CountriesRepositories } from '../../repositories/CountriesRepositories'
import { RecipesRepositories } from '../../repositories/RecipesRepositories'

export class GetCountryService {
  async execute(countryId: string) {
    const countriesRepositories = getCustomRepository(CountriesRepositories)
    const recipesRepositories = getCustomRepository(RecipesRepositories)

    const country = await countriesRepositories.findOne(countryId)

    const recipes = await recipesRepositories.find({
      where: {
        country: country?.id,
      },
      relations: ['userOwner'],
    })

    const fullCountryData = {
      ...country,
      recipes,
    }

    return fullCountryData
  }
}
