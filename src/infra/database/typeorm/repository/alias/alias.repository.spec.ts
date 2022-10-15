import { AliasRepository } from './alias.repository'
import { InMemoryDataSource } from '@infra/database/typeorm'
import { ID } from '@shared/domain/value-object/id.value-object'
import { AliasFactory } from '@domain/alias/factory/alias.factory'

describe('Alias repository tests', () => {
  beforeEach(async () => InMemoryDataSource.initialize())

  afterEach(async () => await InMemoryDataSource.destroy())

  it('should find an alias', async () => {
    const aliasRepository = new AliasRepository()
    const alias = AliasFactory.create({
      aliasId: 'ROW',
      userId: new ID().id,
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
    const alias = AliasFactory.create({
      aliasId: 'ROW',
      userId: new ID().id,
      isRestricted: true,
      description: 'Row Alias',
      extraInfo: 'extra info',
    })

    const newAlias = await aliasRepository.create(alias)

    expect(newAlias).toEqual(alias)
  })
})
