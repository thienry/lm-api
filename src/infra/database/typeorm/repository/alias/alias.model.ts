import { Column, Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

import { ID } from '@shared/domain/value-object/id.value-object'

@Entity('aliases')
class AliasModel {
  @PrimaryColumn()
  id: string

  @Column()
  aliasId: string

  @Column()
  description: string

  @Column()
  extraInfo: string

  @Column()
  isRestricted: boolean

  @Column()
  userId: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  constructor() {
    if (!this.id) this.id = new ID().id
  }
}

export { AliasModel }
