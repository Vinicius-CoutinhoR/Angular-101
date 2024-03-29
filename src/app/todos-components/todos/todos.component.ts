import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../shared/service/todo.service";
import {Todo} from "../../shared/model/todo.model";
import {Router} from "@angular/router";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
  animations: [
    trigger('todoItemAnim', [
      transition(':leave', [
        animate(200, style({
          opacity: 0,
          height: 0,
          marginBottom: 0,
        }))
      ])
    ])
  ]
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  constructor(
    private todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  toggleCompleted(todo: Todo) {
    this.todoService.updateTodo(todo.id, {
      completed: !todo.completed
    })
  }

  onEditClick(todo: Todo) {
    this.router.navigate(['/todos', todo.id])
  }

  onDeleteClick(todo: Todo) {
    this.todoService.deleteTodo(todo.id);
  }

  trackById(index: any, item: Todo) {
    return item.id;
  }
}
