import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateStudentInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
