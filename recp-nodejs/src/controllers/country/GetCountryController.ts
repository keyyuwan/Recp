import { Request, Response } from 'express'
import { GetCountryService } from '../../services/country/GetCountryService'

export class GetCountryController {
  async handle(req: Request, res: Response) {
    const { id } = req.params

    const getCountryService = new GetCountryService()

    const country = await getCountryService.execute(id)

    return res.json(country)
  }
}
