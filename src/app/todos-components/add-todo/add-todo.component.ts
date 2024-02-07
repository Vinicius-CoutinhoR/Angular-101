import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Note} from "../../shared/model/note.model";
import {TodoService} from "../../shared/service/todo.service";
import {Todo} from "../../shared/model/todo.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss'
})
export class AddTodoComponent implements OnInit {

  showValidationsErrors: boolean = false;

  constructor(
    private todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  onFormSubmit(form: NgForm): any {


    if (form.invalid) {
      return this.showValidationsErrors = true;
    }

    const todo: Todo = new Todo(form.value.text)
    this.todoService.addTodo(todo);
    this.router.navigateByUrl("/todos")
  }



}
