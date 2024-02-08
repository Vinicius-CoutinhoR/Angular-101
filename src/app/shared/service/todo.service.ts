import {Injectable, OnDestroy} from '@angular/core';
import { Todo } from "../model/todo.model";
import {fromEvent, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService implements OnDestroy {

  todos: Todo[] = [];

  storageListenSub: Subscription;


  constructor() {
    this.loadState();

    this.storageListenSub = fromEvent<StorageEvent>(window, 'storage')
      .subscribe((event: StorageEvent): void => {
      if (event.key === 'todos') {
        this.loadState();
      }
    });
  }

  ngOnDestroy() {
    if (this.storageListenSub) {
      this.storageListenSub.unsubscribe();
    }
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
    try {
      const todosInStorage = JSON.parse(localStorage.getItem('todos') || '{}');
      // if (!todosInStorage) {
      //   return
      // }

      this.todos.length = 0;
      this.todos.push(...todosInStorage);
    } catch (e) {
      console.log("There's an error retrieving the todos from the local storage!");
    }
  }
}
