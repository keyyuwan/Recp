import { Repository, EntityRepository } from 'typeorm'
import { Country } from '../entities/Country'

@EntityRepository(Country)
export class CountriesRepositories extends Repository<Country> {}
