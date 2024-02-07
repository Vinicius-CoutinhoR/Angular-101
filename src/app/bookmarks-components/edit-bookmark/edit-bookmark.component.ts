import {Component, OnInit} from '@angular/core';
import {BookmarkService} from "../../shared/service/bookmark.service";
import {Bookmark} from "../../shared/model/bookmark.model";
import {ActivatedRoute, ParamMap, Route, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {relativeFrom} from "@angular/compiler-cli";
import {NotificationService} from "../../shared/service/notification.service";

@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrl: './edit-bookmark.component.scss'
})
export class EditBookmarkComponent implements OnInit {

  bookmark: Bookmark = new Bookmark('','https://angular.io/');

  constructor(
    private bookmarkService: BookmarkService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const bookmarkId: string = paramMap.get('id') ?? '';
      this.bookmark = this.bookmarkService.getBookmark(bookmarkId!)
    })
  }

  onFormSubmit(form: NgForm) {
    const { name, url } = form.value
    this.bookmarkService.updateBookmark(this.bookmark.id, {
      name,
      url: new URL(url)
    });

    this.notificationService.show('Bookmark updated!');
  }

  delete(): void{
    this.bookmarkService.deleteBookmark(this.bookmark.id);
    this.router.navigate(['../'], { relativeTo: this.route })
  }

}
