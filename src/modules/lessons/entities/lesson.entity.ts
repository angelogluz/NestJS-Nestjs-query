import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Content } from 'src/modules/contents/entities/content.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Lesson extends BaseEntity {
  @Column()
  description: string;

  @OneToMany(() => Content, (contents) => contents.lesson)
  contents: Content[];
}
