import 'reflect-metadata'
import { DataSource } from 'typeorm'

import { AliasModel } from '@infra/database/typeorm/repository/alias/alias.model'
import { LocaleModel } from '@infra/database/typeorm/repository/locale/locale.model'
import { MappingModel } from '@infra/database/typeorm/repository/mapping/mapping.model'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'qwerty',
  database: 'locale_mapper',
  synchronize: true,
  logging: true,
  entities: [AliasModel, LocaleModel, MappingModel],
})

export const InMemoryDataSource = new DataSource({
  type: 'sqlite',
  dropSchema: true,
  database: ':memory:',
  synchronize: true,
  logging: false,
  entities: [AliasModel, LocaleModel, MappingModel],
})
