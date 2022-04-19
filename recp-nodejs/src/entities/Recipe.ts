import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm'
import { v4 as uuid } from 'uuid'
import { Country } from './Country'
import { User } from './User'

@Entity('recipes')
export class Recipe {
  @PrimaryColumn()
  readonly id: string

  @Column()
  name: string

  @Column()
  image: string

  @Column()
  description: string

  @Column()
  ingredients: string

  @Column()
  preparation_steps: string

  @CreateDateColumn()
  created_at: Date

  @Column()
  user: string

  @JoinColumn({ name: 'user' })
  @ManyToOne(() => User)
  userOwner: User

  @Column()
  country: string

  @JoinColumn({ name: 'country' })
  @ManyToOne(() => Country)
  countryOwner: Country

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
