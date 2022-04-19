import { Repository, EntityRepository } from 'typeorm'
import { Recipe } from '../entities/Recipe'

@EntityRepository(Recipe)
export class RecipesRepositories extends Repository<Recipe> {}
