import {Component, OnInit} from '@angular/core';
import {Note} from "../../shared/model/note.model";
import {NoteService} from "../../shared/service/note.service";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent implements OnInit {

  notes: Note[] = [];

  constructor(private noteService: NoteService) {
    this.notes = this.noteService.getNotes();
  }

  ngOnInit() {
  }

}
