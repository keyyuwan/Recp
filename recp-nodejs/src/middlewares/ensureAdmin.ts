import { NextFunction, Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { UserRepositories } from '../repositories/UserRepositories'

export async function ensureAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const sub = req.headers['sub']

  const usersRepositories = getCustomRepository(UserRepositories)

  const user = await usersRepositories.findOne({
    where: {
      sub,
    },
  })

  if (user?.admin) {
    return next()
  }

  return res
    .status(403)
    .json({ error: 'To create a country you must be an admin' })
}
