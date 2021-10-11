import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';
import { StudentDTO } from './../../students/dto/student.dto';

@ObjectType('Discipline')
@FilterableOffsetConnection('students', () => StudentDTO, {
  nullable: true,
})
export class DisciplineDTO extends BaseDTO {
  @FilterableField()
  name: string;
}
