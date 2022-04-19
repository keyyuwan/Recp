import { getCustomRepository } from 'typeorm'
import { CountriesRepositories } from '../../repositories/CountriesRepositories'

export class GetCountriesService {
  async execute() {
    const countriesRepositories = getCustomRepository(CountriesRepositories)

    const countries = await countriesRepositories.find()

    return countries
  }
}
