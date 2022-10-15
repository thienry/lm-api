import { MappingModel } from './mapping.model'
import { Mapping } from '@domain/mapping/entity/mapping.entity'
import { IMappingRepository } from '@domain/mapping/interfaces/mapping.repository.interface'

class MappingRepository implements IMappingRepository {
  async find(key: string): Promise<Mapping> {
    throw new Error('Method not implemented!')
  }

  async create(entity: MappingModel): Promise<Mapping> {
    throw new Error('Method not implemented!')
  }

  async update(entity: MappingModel): Promise<Mapping> {
    throw new Error('Method not implemented!')
  }

  async list(): Promise<Mapping[]> {
    throw new Error('Method not implemented!')
  }

  async delete(key: string): Promise<Mapping> {
    throw new Error('Method not implemented!')
  }
}

export { MappingRepository }
