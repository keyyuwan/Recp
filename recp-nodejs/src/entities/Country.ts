import { Entity, PrimaryColumn, Column } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('countries')
export class Country {
  @PrimaryColumn()
  readonly id: string

  @Column()
  name: string

  @Column()
  image: string

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
