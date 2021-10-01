import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Content {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @FilterableField()
  exampleField: number;
}
