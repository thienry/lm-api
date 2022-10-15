import { Column, Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

import { ID } from '@shared/domain/value-object/id.value-object'

@Entity('mappings')
class MappingModel {
  @PrimaryColumn()
  id: string

  @Column()
  key: string

  @Column()
  scriptName: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  constructor() {
    if (!this.id) this.id = new ID().id
  }
}

export { MappingModel }
