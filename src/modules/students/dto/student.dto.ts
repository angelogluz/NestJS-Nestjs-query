import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';
import { DisciplineDTO } from 'src/modules/disciplines/dto/discipline.dto';

@ObjectType('Student')
@FilterableOffsetConnection('disciplines', () => DisciplineDTO, {
  nullable: true,
})
export class StudentDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @FilterableField()
  key: string;
}
