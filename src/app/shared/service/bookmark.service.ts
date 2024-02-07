import { Injectable } from '@angular/core';
import {Bookmark} from "../model/bookmark.model";

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  bookmarks: Bookmark[] = [
    new Bookmark('Wikipedia', 'http://www.wikipedia.org'),
    new Bookmark('Google', 'http://www.google.com'),
    new Bookmark('Amazon', 'http://www.amazon.com'),
    new Bookmark('Yahoo Japan', 'http://www.yahoo.co.jp')
  ];

  constructor() { }

  getBookmarks() {
    return this.bookmarks
  }

  getBookmark(id: string) {
    return this.bookmarks.find(b => b.id === id)!;
  }

  addBookmark(bookmark: Bookmark) {
    this.bookmarks.push(bookmark);
  }

  updateBookmark(id: string, updatedFields: Partial<Bookmark>) {
    const bookmark = this.getBookmark(id);
    Object.assign(bookmark, updatedFields);
  }

  deleteBookmark(id: string): void {
    const bookmarkIndex = this.bookmarks.findIndex(b => b.id === id)!;
    if (bookmarkIndex !== -1) {
      this.bookmarks.splice(bookmarkIndex, 1);
    }
  }

}