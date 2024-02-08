import { Injectable } from '@angular/core';
import {Bookmark} from "../model/bookmark.model";

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  bookmarks: Bookmark[] = [];

  constructor() {
    this.loadState();
  }

  getBookmarks(): Bookmark[] {
    return this.bookmarks
  }

  getBookmark(id: string): Bookmark {
    return this.bookmarks.find(b => b.id === id)!;
  }

  addBookmark(bookmark: Bookmark): void {
    this.bookmarks.push(bookmark);
    this.saveState();
  }

  updateBookmark(id: string, updatedFields: Partial<Bookmark>): void {
    const bookmark: Bookmark = this.getBookmark(id);
    Object.assign(bookmark, updatedFields);

    this.saveState();
  }

  deleteBookmark(id: string): void {
    const bookmarkIndex: number = this.bookmarks.findIndex(b => b.id === id)!;
    if (bookmarkIndex !== -1) {
      this.bookmarks.splice(bookmarkIndex, 1);
      this.saveState();
    }
  }

  saveState(): void {
    localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
  }

  loadState(): void {
    const savedBookmarks: string | null = localStorage.getItem('bookmarks');
    this.bookmarks = savedBookmarks ? JSON.parse(savedBookmarks) : [];
  }
}
