import { Column, Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

import { ID } from '@shared/domain/value-object/id.value-object'

@Entity('locales')
class LocaleModel {
  @PrimaryColumn()
  id: string

  @Column()
  localeId: string

  @Column()
  displayName: string

  @Column()
  extraInfo: string

  @Column()
  languageCode: string

  @Column()
  nativeLanguageDescription: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  constructor() {
    if (!this.id) this.id = new ID().id
  }
}

export { LocaleModel }
