import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { BookmarksComponent } from './bookmarks-components/bookmarks/bookmarks.component';
import { TodosComponent } from './todos-components/todos/todos.component';
import { NotesComponent } from './notes-components/notes/notes.component';
import { BookmarkTileComponent } from './bookmarks-components/bookmark-tile/bookmark-tile.component';

import { AddNoteComponent } from './notes-components/add-note/add-note.component';
import { NoteCardComponent } from './notes-components/note-card/note-card.component';
import { EditNoteComponent } from './notes-components/edit-note/edit-note.component';
import { TodoItemComponent } from './todos-components/todo-item/todo-item.component';
import { AddTodoComponent } from './todos-components/add-todo/add-todo.component';
import { EditTodoComponent } from './todos-components/edit-todo/edit-todo.component';
import { AddBookmarkComponent } from './bookmarks-components/add-bookmark/add-bookmark.component';
import { ManageBookmarksComponent } from './bookmarks-components/manage-bookmarks/manage-bookmarks.component';
import { EditBookmarkComponent } from './bookmarks-components/edit-bookmark/edit-bookmark.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    BookmarksComponent,
    TodosComponent,
    NotesComponent,
    BookmarkTileComponent,
    AddNoteComponent,
    NoteCardComponent,
    EditNoteComponent,
    TodoItemComponent,
    AddTodoComponent,
    EditTodoComponent,
    AddBookmarkComponent,
    ManageBookmarksComponent,
    EditBookmarkComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
