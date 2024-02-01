import { Injectable } from '@angular/core';
import {Note} from "./note.model";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes: Note[] = [
    new Note('Test title', 'Test Content!'),
    new Note('Test title 123', 'Test Content! 123')
  ];

  constructor() {
  }

  getNotes() {
    return this.notes;
  }

  getNote(id: string | null): Note {
    return this.notes.find(n => n.id === id )!;
  }

  addNote(note: Note): void {
    this.notes.push(note);
  }

  updateNote(id: string, updatedFields: Partial<Note>): void {
    const note: Note | undefined = this.getNote(id);
    Object.assign(note, updatedFields);
  }

  deleteNote(id: string) {
    const noteIndex = this.notes.findIndex(n => n.id === id);
    if (noteIndex !== -1) {
      return this.notes.splice(noteIndex, 1)
    }
    return undefined;
  }
}
