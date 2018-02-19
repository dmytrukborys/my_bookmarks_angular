import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BookmarkService} from '../bookmark.service';
import { Component, OnInit, Input } from '@angular/core';
import { Bookmark } from '../bookmark';


@Component({
  selector: 'app-bookmark-detail',
  templateUrl: './bookmark-detail.component.html',
  styleUrls: ['./bookmark-detail.component.css']
})
export class BookmarkDetailComponent implements OnInit {

  @Input() bookmark: Bookmark;

  constructor(
    private route: ActivatedRoute,
    private bookmarkService: BookmarkService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getBookmark();
  }

  getBookmark():void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookmarkService.getBookmark(id)
      .subscribe(bookmark=>this.bookmark = bookmark);
  }

  save(): void {
    this.bookmarkService.updateBookmark(this.bookmark)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }



}
