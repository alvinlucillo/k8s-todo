import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name)
    private readonly todoModel: Model<Todo>,
  ) {}

  create(createTodoDto: CreateTodoDto) {
    return this.todoModel.create(createTodoDto);
  }

  findAll() {
    return this.todoModel.find({});
  }

  findOne(id: number) {
    return this.todoModel.findById(id).exec();
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    let todo = await this.todoModel.findById(id);
    todo.isChecked = updateTodoDto.isChecked;
    todo.title = updateTodoDto.title;

    return todo.save();
  }

  async remove(id: number) {
    let todo = await this.todoModel.findById(id);

    if (todo) {
      await todo.delete();
      return true;
    } else {
      return false;
    }
  }
}
