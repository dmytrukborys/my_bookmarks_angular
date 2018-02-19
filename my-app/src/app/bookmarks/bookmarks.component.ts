import {Component, OnInit} from '@angular/core';
import {Bookmark} from '../bookmark';
import {BookmarkService} from '../bookmark.service';
import {SelectedCategoryService} from "../selected.category.service";

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  bookmarks: Bookmark[];

  getBookmarks(): void {
    this.bookmarkService.getBookmarks()
      .subscribe(bookmarks => this.bookmarks = bookmarks);
  }

  add(name: string, category:string, url:string): void {
    name = name.trim();
    category = category.trim();
    url = url.trim();
    if (!name || !category || !url) { return; }

    this.bookmarkService.addBookmark({ title:name, category, url} as Bookmark)
      .subscribe(bookmark => {
        this.bookmarks.push(bookmark);
      });
  }

  delete(bookmark: Bookmark): void {
    this.bookmarks = this.bookmarks.filter(b => b !== bookmark);
    this.bookmarkService.deleteBookmark(bookmark).subscribe();
  }

  constructor(private bookmarkService: BookmarkService, private selectedCategoryService: SelectedCategoryService) {
  }

  ngOnInit() {
    this.getBookmarks();
    this.selectedCategoryService.currentCategory.subscribe(category => this.category = category)
  }

  category:string;

}
