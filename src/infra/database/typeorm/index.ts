import 'reflect-metadata'
import { DataSource } from 'typeorm'

import { AliasModel } from '@infra/database/typeorm/repository/alias/alias.model'
import { LocaleModel } from '@infra/database/typeorm/repository/locale/locale.model'
import { MappingModel } from '@infra/database/typeorm/repository/mapping/mapping.model'
import { UserModel } from '@infra/database/typeorm/repository/user/user.model'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'locale_mapper',
  synchronize: true,
  logging: true,
  entities: [
    './src/infra/database/typeorm/repository/alias/alias.model.ts',
    './src/infra/database/typeorm/repository/locale/locale.model.ts',
    './src/infra/database/typeorm/repository/mapping/mapping.model.ts',
    './src/infra/database/typeorm/repository/user/user.model.ts',
  ],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
})

export const InMemoryDataSource = new DataSource({
  type: 'sqlite',
  dropSchema: true,
  database: ':memory:',
  synchronize: true,
  logging: false,
  entities: [AliasModel, LocaleModel, MappingModel, UserModel],
})
