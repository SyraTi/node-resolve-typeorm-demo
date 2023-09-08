import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  keyword: string

  @Column()
  excludeKeyword: string

  @Column()
  createdBy: string

  @Column({
    nullable: true,
  })
  createdByGroup?: string

  @Column({
    default: 0,
  })
  latestTimestamp: number = 0

  @DeleteDateColumn()
  deletedAt: Date

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
