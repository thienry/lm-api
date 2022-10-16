import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('mappings')
class MappingModel {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  key: string

  @Column()
  scriptName: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}

export { MappingModel }
