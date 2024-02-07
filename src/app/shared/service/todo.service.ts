import { Injectable } from '@angular/core';
import {Todo} from "../model/todo.model";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [
    new Todo('This is a test!'),
    new Todo('Hey!')
  ];

  constructor() {
  }

  getTodos() {
    return this.todos
  }

  getTodo(id: string | null) {
    return this.todos.find(t => t.id === id)!;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(id: string, updatedTodoFields: Partial<Todo>) {
    const todo = this.getTodo(id)!;
    Object.assign(todo, updatedTodoFields);
  }

  deleteTodo(id: string) {
    const index = this.todos.findIndex(t => t.id === id);
    if (index !== -1) {
      console.log('deletou');
      return this.todos.splice(index, 1);
    }
    console.log('caiu no undefined index is: ' + index);
    return undefined;
  }
}