import {Injectable, OnDestroy} from '@angular/core';
import {Bookmark} from "../model/bookmark.model";
import {fromEvent, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookmarkService implements OnDestroy {

  bookmarks: Bookmark[] = [];

  storageListenSub: Subscription;

  constructor() {
    this.loadState();

    this.storageListenSub = fromEvent<StorageEvent>(window, 'storage')
      .subscribe((event: StorageEvent): void => {
        if (event.key === 'bookmarks') {
          this.loadState();
        }
      });
  }

  ngOnDestroy() {
    if (this.storageListenSub) {
      this.storageListenSub.unsubscribe();
    }
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
    try {
      const bookmarksInStorage = JSON.parse(localStorage.getItem('bookmarks')
        || '{}', (key: string, value): URL | undefined => {
        if (key === 'url') {
          return new URL(value);
        }
        return value;
      });

      this.bookmarks.length = 0;
      this.bookmarks.push(...bookmarksInStorage);
    } catch (e) {
      console.log("There's an error retrieving the bookmarks from the local storage!");
    }
  }
}
