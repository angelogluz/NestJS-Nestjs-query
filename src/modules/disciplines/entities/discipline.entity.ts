import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Student } from 'src/modules/students/entities/student.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity()
export class Discipline extends BaseEntity {
  @Column()
  name: string;

  @ManyToMany(() => Student, (students) => students.disciplines, {
    nullable: true,
  })
  @JoinTable()
  students: Student[];
}
