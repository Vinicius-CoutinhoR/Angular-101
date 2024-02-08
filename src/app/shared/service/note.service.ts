import {Injectable, OnDestroy} from '@angular/core';
import {Note} from "../model/note.model";
import {fromEvent, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NoteService implements OnDestroy {

  notes: Note[] = [];

  storageListenSub: Subscription;

  constructor() {
    this.loadState();

    this.storageListenSub = fromEvent<StorageEvent>(window, 'storage')
      .subscribe((event: StorageEvent): void => {
        if (event.key === 'notes') {
          this.loadState();
        }
      });
  }

  ngOnDestroy() {
    if (this.storageListenSub) {
      this.storageListenSub.unsubscribe();
    }
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
    try {
      const notesInStorage = JSON.parse(localStorage.getItem('notes') || '{}');
      this.notes.length = 0;
      this.notes.push(...notesInStorage);
    } catch (e) {
      console.log("There's an error retrieving the notes from the local storage!");
    }
  }

}
