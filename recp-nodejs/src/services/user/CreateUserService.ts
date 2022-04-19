import { getCustomRepository } from 'typeorm'
import { UserRepositories } from '../../repositories/UserRepositories'

interface IUserReq {
  name: string
  email: string
  avatar?: string
  admin?: boolean
  sub: string
}

export class CreateUserService {
  async execute({ name, email, avatar, admin = false, sub }: IUserReq) {
    const userRepositories = getCustomRepository(UserRepositories)

    const userAlreadyExists = await userRepositories.findOne({ email })

    if (userAlreadyExists) {
      return
    }

    const user = userRepositories.create({
      name,
      email,
      avatar,
      admin,
      sub,
    })

    await userRepositories.save(user)

    return user
  }
}
