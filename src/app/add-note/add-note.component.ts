import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Note} from "../shared/note.model";
import {NoteService} from "../shared/note.service";
import {Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.scss'
})
export class AddNoteComponent implements OnInit {

  showValidationErrors: boolean = false;
  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit() { }

  onFormSubmit(form: NgForm): any {
    if (form.invalid) {
      return this.showValidationErrors = true;
    }

    const note: Note = new Note(form.value.title, form.value.content);
    console.log(note);


    this.noteService.addNote(note);
    this.router.navigateByUrl("/notes")
  }
}
