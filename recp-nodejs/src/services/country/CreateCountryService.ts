import { getCustomRepository } from 'typeorm'
import { CountriesRepositories } from '../../repositories/CountriesRepositories'

interface IReqCountry {
  name: string
  image: string
}

export class CreateCountryService {
  async execute({ name, image }: IReqCountry) {
    const countriesRepositories = getCustomRepository(CountriesRepositories)

    if (!name || !image) {
      throw new Error('Country must have a name and an image')
    }

    const countryAlreadyExists = await countriesRepositories.findOne({ name })

    if (countryAlreadyExists) {
      throw new Error('Country already exists')
    }

    const country = countriesRepositories.create({
      name,
      image,
    })

    await countriesRepositories.save(country)
  }
}
