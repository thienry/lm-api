import {
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm'

import { UserModel } from '../user/user.model'

@Entity('aliases')
class AliasModel {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ unique: true })
  aliasId: string

  @Column()
  description: string

  @Column({ nullable: true })
  extraInfo: string

  @Column({ default: false })
  isRestricted: boolean

  @ManyToOne(() => UserModel)
  @JoinColumn({ name: 'userId' })
  user: UserModel

  @Column()
  userId: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}

export { AliasModel }
