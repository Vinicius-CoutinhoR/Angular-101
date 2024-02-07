import {Component, Input, OnInit} from '@angular/core';
import {Bookmark} from "../../shared/model/bookmark.model";

@Component({
  selector: 'app-bookmark-tile',
  templateUrl: './bookmark-tile.component.html',
  styleUrl: './bookmark-tile.component.scss'
})
export class BookmarkTileComponent implements OnInit {

  @Input() bookmark: Bookmark = new Bookmark('Example', 'https://angular.io/');

  tileIconSrc?: string;

  faviconError: boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.tileIconSrc = this.bookmark?.url.origin + '/favicon.ico'
  }

}
