import { Router } from 'express'

import { GetUserController } from './controllers/user/GetUserController'
import { GetUserAuthRecipesController } from './controllers/user/GetUserAuthRecipesController'
import { CreateUserController } from './controllers/user/CreateUserController'

import { GetRecipesController } from './controllers/recipe/GetRecipesController'
import { GetRecipeController } from './controllers/recipe/GetRecipeController'
import { CreateRecipeController } from './controllers/recipe/CreateRecipeController'
import { DeleteRecipeController } from './controllers/recipe/DeleteRecipeController'

import { GetCountriesController } from './controllers/country/GetCountriesController'
import { GetCountryController } from './controllers/country/GetCountryController'
import { CreateCountryController } from './controllers/country/CreateCountryController'

import { ensureAdmin } from './middlewares/ensureAdmin'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'

const router = Router()

// USERS
const getUserController = new GetUserController()
const getUserAuthRecipesController = new GetUserAuthRecipesController()
const createUserController = new CreateUserController()

router.get('/api/users/:id', getUserController.handle)
router.get('/api/users/auth/recipes', getUserAuthRecipesController.handle)
router.post('/api/users', createUserController.handle)

// RECIPES
const getRecipesController = new GetRecipesController()
const getRecipeController = new GetRecipeController()
const createRecipeController = new CreateRecipeController()
const deleteRecipeController = new DeleteRecipeController()

router.get('/api/recipes', getRecipesController.handle)
router.get('/api/recipes/:id', getRecipeController.handle)
router.post('/api/recipes', ensureAuthenticated, createRecipeController.handle)
router.delete(
  '/api/recipes',
  ensureAuthenticated,
  deleteRecipeController.handle
)

// COUNTRIES
const getCountriesController = new GetCountriesController()
const getCountryController = new GetCountryController()
const createCountryController = new CreateCountryController()

router.get('/api/countries', getCountriesController.handle)
router.get('/api/countries/:id', getCountryController.handle)
router.post(
  '/api/countries',
  ensureAuthenticated,
  ensureAdmin,
  createCountryController.handle
)

export { router }
