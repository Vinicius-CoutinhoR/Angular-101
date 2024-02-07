import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {BookmarkService} from "../../shared/service/bookmark.service";
import {Bookmark} from "../../shared/model/bookmark.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrl: './add-bookmark.component.scss'
})
export class AddBookmarkComponent implements OnInit {

  constructor(
    private bookmarkService: BookmarkService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  onFormSubmit(form: NgForm) {
    const { name, url } = form.value;
    const bookmark: Bookmark = new Bookmark(name, url);
    this.bookmarkService.addBookmark(bookmark);
    this.router.navigateByUrl("/bookmarks")
  }
}
