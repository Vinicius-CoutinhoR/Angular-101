import {Component, OnInit} from '@angular/core';
import {Bookmark} from "../../shared/model/bookmark.model";
import {BookmarkService} from "../../shared/service/bookmark.service";

@Component({
  selector: 'app-manage-bookmarks',
  templateUrl: './manage-bookmarks.component.html',
  styleUrl: './manage-bookmarks.component.scss'
})
export class ManageBookmarksComponent implements OnInit {

  bookmarks: Bookmark[] = []

  constructor(private bookmarkService: BookmarkService) {
  }

  ngOnInit(): void {
    this.bookmarks = this.bookmarkService.getBookmarks();
  }
}
