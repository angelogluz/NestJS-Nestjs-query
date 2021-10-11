import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';
import { ContentDTO } from './../../contents/dto/content.dto';

@ObjectType('Lesson')
@FilterableOffsetConnection('contents', () => ContentDTO, { nullable: true })
export class LessonDTO extends BaseDTO {
  @FilterableField()
  description: string;
}
