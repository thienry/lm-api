import { User } from '../entity/user.entity'
import { IRepository } from '@shared/domain/repository/repository.interface'

interface IUserRepository extends IRepository<User> {}

export { IUserRepository }
