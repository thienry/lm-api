import { Repository } from 'typeorm'

import { UserModel } from './user.model'
import { User } from '@domain/user/entity/user.entity'
import { AppDataSource, InMemoryDataSource } from '@infra/database/typeorm'
import { IUserRepository } from '@domain/user/interfaces/user.repository.interface'

class UserRepository implements IUserRepository {
  private repository: Repository<UserModel>

  constructor() {
    this.repository = AppDataSource.isInitialized
      ? AppDataSource.getRepository(UserModel)
      : InMemoryDataSource.getRepository(UserModel)
  }

  async find(id: string): Promise<User> {
    const user = await this.repository.findOne({ where: { id } })
    return new User(user)
  }

  async create(entity: User): Promise<User> {
    const newUser = this.repository.create(entity)
    const user = await this.repository.save(newUser)
    return new User(user)
  }

  async update(entity: User): Promise<User> {
    throw new Error('Method not implemented!')
  }

  async list(): Promise<User[]> {
    throw new Error('Method not implemented!')
  }

  async delete(key: string): Promise<User> {
    throw new Error('Method not implemented!')
  }
}

export { UserRepository }
