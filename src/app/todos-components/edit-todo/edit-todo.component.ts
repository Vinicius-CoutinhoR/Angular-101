import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Route, Router} from "@angular/router";
import {TodoService} from "../../shared/service/todo.service";
import {Todo} from "../../shared/model/todo.model";
import {NgForm} from "@angular/forms";
import {Note} from "../../shared/model/note.model";
import {NotificationService} from "../../shared/service/notification.service";

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrl: './edit-todo.component.scss'
})
export class EditTodoComponent implements OnInit {

  todo: Todo = new Todo('');

  showValidationErrors: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const todoId: any = paramMap.get('id') ?? '';
      this.todo = this.todoService.getTodo(todoId);
    })
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) {
      return
    }
    this.todoService.updateTodo(this.todo.id, form.value);
    this.router.navigateByUrl("/todos");
    this.notificationService.show("Todo Updated!");
  }
}
