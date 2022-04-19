import { Request, Response } from 'express'
import { GetCountriesService } from '../../services/country/GetCountriesService'

export class GetCountriesController {
  async handle(req: Request, res: Response) {
    const getCountriesService = new GetCountriesService()

    const countries = await getCountriesService.execute()

    return res.json(countries)
  }
}
