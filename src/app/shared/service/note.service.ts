import {Injectable } from '@angular/core';
import {Note} from "../model/note.model";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes: Note[] = [];

  constructor() {
    this.loadState();
  }

  getNotes(): Note[] {
    return this.notes;
  }

  getNote(id: string | null): Note {
    return this.notes.find(n => n.id === id )!;
  }

  addNote(note: Note): void {
    this.notes.push(note);
    this.saveState();
  }

  updateNote(id: string, updatedFields: Partial<Note>): void {
    const note: Note | undefined = this.getNote(id);
    Object.assign(note, updatedFields);

    this.saveState();
  }

  deleteNote(id: string): void {
    const noteIndex: number = this.notes.findIndex(n => n.id === id);
    if (noteIndex !== -1) {
      this.notes.splice(noteIndex, 1)
      this.saveState();
    }
  }

  saveState(): void {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  loadState(): void {
    const savedNotes: string | null = localStorage.getItem('notes');
    this.notes = savedNotes ? JSON.parse(savedNotes) : [];
  }

}
