import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Todo extends Document {
  @Prop()
  title: string;

  @Prop()
  isChecked: boolean;
}

const TodoSchema = SchemaFactory.createForClass(Todo);

TodoSchema.set('toJSON', { getters: true });

export { TodoSchema };
