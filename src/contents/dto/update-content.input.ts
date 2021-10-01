import { CreateContentInput } from './create-content.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateContentInput extends PartialType(CreateContentInput) {
  @Field(() => Int)
  id: number;
}
