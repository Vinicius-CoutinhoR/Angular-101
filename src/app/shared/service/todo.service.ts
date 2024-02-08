import { Injectable } from '@angular/core';
import {Todo} from "../model/todo.model";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [];

  constructor() {
    this.loadState();
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  getTodo(id: string | null): Todo {
    return this.todos.find(t => t.id === id)!;
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
    this.saveState();
  }

  updateTodo(id: string, updatedTodoFields: Partial<Todo>): void {
    const todo: Todo = this.getTodo(id)!;
    Object.assign(todo, updatedTodoFields);

    this.saveState();
  }

  deleteTodo(id: string): void {
    const index: number = this.todos.findIndex(t => t.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
      this.saveState();
    }
  }

  saveState(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  loadState(): void {
    const savedTodos: string | null = localStorage.getItem('todos');
    this.todos = savedTodos ? JSON.parse(savedTodos) : [];
  }
}
