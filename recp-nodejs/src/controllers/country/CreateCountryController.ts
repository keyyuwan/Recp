import { Request, Response } from 'express'
import { CreateCountryService } from '../../services/country/CreateCountryService'

export class CreateCountryController {
  async handle(req: Request, res: Response) {
    const { name, image } = req.body

    const createCountryService = new CreateCountryService()

    const country = await createCountryService.execute({ name, image })

    return res.json(country)
  }
}
