import { Repository } from 'typeorm'

import { AliasModel } from './alias.model'
import { Alias } from '@domain/alias/entity/alias.entity'
import { AppDataSource, InMemoryDataSource } from '@infra/database/typeorm'
import { IAliasRepository } from '@domain/alias/interfaces/alias.repository.interface'

class AliasRepository implements IAliasRepository {
  private repository: Repository<AliasModel>

  constructor() {
    this.repository = AppDataSource.isInitialized
      ? AppDataSource.getRepository(AliasModel)
      : InMemoryDataSource.getRepository(AliasModel)
  }

  async create(entity: Alias): Promise<Alias> {
    const newAlias = this.repository.create(entity)
    const alias = await this.repository.save(newAlias)
    return new Alias(alias)
  }

  async find(id: string): Promise<Alias> {
    const alias = await this.repository.findOne({ where: { id } })
    return new Alias(alias)
  }

  list: () => Promise<Alias[]>
  update: (entity: Alias) => Promise<Alias>
  delete: (aliasId: string) => Promise<Alias>
}

export { AliasRepository }
