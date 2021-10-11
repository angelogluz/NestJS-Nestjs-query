import { Discipline } from 'src/modules/disciplines/entities/discipline.entity';
import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from './../../bases/entities/base.entity';

@Entity()
export class Student extends BaseEntity {
  @Column()
  name: string;

  @Column()
  key: string;

  @ManyToMany(() => Discipline, (disciplines) => disciplines.students, {
    nullable: true,
  })
  disciplines: Discipline[];
}
