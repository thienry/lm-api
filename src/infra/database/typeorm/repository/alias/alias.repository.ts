import { Repository } from 'typeorm'

import { Alias } from '@domain/alias/entity/alias.entity'
import { AppDataSource, InMemoryDataSource } from '@infra/database/typeorm'
import { IAliasRepository } from '@domain/alias/interfaces/alias.repository.interface'
import { AliasModel } from './alias.model'

class AliasRepository implements IAliasRepository {
  private repository: Repository<AliasModel>

  constructor() {
    this.repository = AppDataSource.isInitialized
      ? AppDataSource.getRepository(AliasModel)
      : InMemoryDataSource.getRepository(AliasModel)
  }

  async create(entity: AliasModel): Promise<Alias> {
    const alias = this.repository.create(entity)
    const newAlias = await this.repository.save(alias)

    return new Alias({
      id: newAlias.id,
      userId: newAlias.userId,
      aliasId: newAlias.aliasId,
      extraInfo: newAlias.extraInfo,
      createdAt: newAlias.createdAt,
      updatedAt: newAlias.updatedAt,
      description: newAlias.description,
      isRestricted: newAlias.isRestricted,
    })
  }

  async find(id: string): Promise<Alias> {
    const alias = await this.repository.findOne({ where: { id } })
    return new Alias({
      id: alias.id,
      userId: alias.userId,
      aliasId: alias.aliasId,
      extraInfo: alias.extraInfo,
      createdAt: alias.createdAt,
      updatedAt: alias.updatedAt,
      description: alias.description,
      isRestricted: alias.isRestricted,
    })
  }

  list: () => Promise<Alias[]>
  update: (entity: AliasModel) => Promise<Alias>
  delete: (aliasId: string) => Promise<Alias>
}

export { AliasRepository }
