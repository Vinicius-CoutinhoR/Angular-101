import {Component, OnInit} from '@angular/core';
import {BookmarkService} from "../../shared/service/bookmark.service";
import {Bookmark} from "../../shared/model/bookmark.model";

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrl: './bookmarks.component.scss'
})
export class BookmarksComponent implements OnInit {

  bookmarks?: Bookmark[];

  constructor(
    private bookmarkService: BookmarkService
  ) {
  }

  ngOnInit() {
   this.bookmarks = this.bookmarkService.getBookmarks();
  }



}
