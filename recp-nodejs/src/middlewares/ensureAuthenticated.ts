import { NextFunction, Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { UserRepositories } from '../repositories/UserRepositories'

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const sub = req.headers['sub']

  if (!sub) {
    return res.status(401).end()
  }

  const usersRepositories = getCustomRepository(UserRepositories)

  const user = await usersRepositories.findOne({
    where: {
      sub,
    },
  })

  if (!user) {
    return res.status(401).end()
  }

  return next()
}
