import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from "./bookmarks-components/bookmarks/bookmarks.component";
import { TodosComponent } from "./todos-components/todos/todos.component";
import { NotesComponent } from "./notes-components/notes/notes.component";
import { AddNoteComponent } from "./notes-components/add-note/add-note.component";
import { EditNoteComponent } from "./notes-components/edit-note/edit-note.component";
import { AddTodoComponent } from "./todos-components/add-todo/add-todo.component";
import { EditTodoComponent } from "./todos-components/edit-todo/edit-todo.component";
import { AddBookmarkComponent } from "./bookmarks-components/add-bookmark/add-bookmark.component";
import {ManageBookmarksComponent} from "./bookmarks-components/manage-bookmarks/manage-bookmarks.component";
import {EditBookmarkComponent} from "./bookmarks-components/edit-bookmark/edit-bookmark.component";

const routes: Routes = [
  { path: 'bookmarks', component: BookmarksComponent, data: { tab: 0 }},
  { path: 'bookmarks/add', component: AddBookmarkComponent },
  { path: 'bookmarks/manage', component: ManageBookmarksComponent, children: [
      { path: ':id', component: EditBookmarkComponent },
    ] },
  { path: 'todos', component: TodosComponent, data: { tab: 1 }},
  { path: 'todos/add', component: AddTodoComponent },
  { path: 'todos/:id', component: EditTodoComponent },
  { path: 'notes', component: NotesComponent, data: { tab: 2 }},
  { path: 'notes/add', component: AddNoteComponent },
  { path: 'notes/:id', component: EditNoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
