import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {NoteService} from "../../shared/service/note.service";
import {NgForm} from "@angular/forms";
import {Note} from "../../shared/model/note.model";

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrl: './edit-note.component.scss'
})
export class EditNoteComponent implements OnInit {

  note: Note = new Note('', '');
  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const idParam: string = paramMap.get('id') ?? '';
      this.note = this.noteService.getNote(idParam);
    })
  }

  onFormSubmit(form: NgForm): any {
    this.noteService.updateNote(this.note.id, form.value);
    this.router.navigateByUrl("/notes");
  }

  deleteNote() {
    this.noteService.deleteNote(this.note.id);
    this.router.navigateByUrl("/notes");
  }

}
