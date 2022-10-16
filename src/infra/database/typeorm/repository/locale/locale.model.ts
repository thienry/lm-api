import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('locales')
class LocaleModel {
  @PrimaryGeneratedColumn('uuid')
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
}

export { LocaleModel }
