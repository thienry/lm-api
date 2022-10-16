import { AliasRepository } from './alias.repository'
import { UserRepository } from '../user/user.repository'
import { InMemoryDataSource } from '@infra/database/typeorm'
import { AliasFactory } from '@domain/alias/factory/alias.factory'
import { UserFactory } from '@domain/user/factory/user.factory'

describe('Alias repository tests', () => {
  beforeEach(async () => InMemoryDataSource.initialize())

  afterEach(async () => await InMemoryDataSource.destroy())

  it('should find an alias', async () => {
    const aliasRepository = new AliasRepository()
    const userRepository = new UserRepository()

    const user = UserFactory.create({
      email: 'john.doe@email.com',
      login: 'john.doe',
      name: 'John',
      password: 'test',
      surname: 'Doe',
    })
    const newUser = await userRepository.create(user)

    const alias = AliasFactory.create({
      aliasId: 'ROW',
      userId: newUser.id,
      isRestricted: true,
      description: 'Row Alias',
      extraInfo: 'extra info',
    })

    const newAlias = await aliasRepository.create(alias)
    const aliasFound = await aliasRepository.find(newAlias.id)

    expect(aliasFound).toEqual(newAlias)
  })

  it('should create an alias', async () => {
    const aliasRepository = new AliasRepository()
    const userRepository = new UserRepository()

    const user = UserFactory.create({
      email: 'john.doe@email.com',
      login: 'john.doe',
      name: 'John',
      password: 'test',
      surname: 'Doe',
    })
    const newUser = await userRepository.create(user)

    const alias = AliasFactory.create({
      aliasId: 'ROW',
      userId: newUser.id,
      description: 'Row Alias',
    })

    const newAlias = await aliasRepository.create(alias)

    expect(newAlias).toEqual(alias)
  })
})
