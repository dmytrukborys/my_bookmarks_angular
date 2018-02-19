import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { CategoriesComponent } from './categories/categories.component';
import { BookmarkDetailComponent } from './bookmark-detail/bookmark-detail.component';
import {CategoryService} from "./category.service";
import {BookmarkService} from "./bookmark.service";
import { AppRoutingModule } from './app-routing.module';
import { BookmarkSearchComponent } from './bookmark-search/bookmark-search.component';

@NgModule({
  declarations: [
    AppComponent,
    BookmarksComponent,
    CategoriesComponent,
    BookmarkDetailComponent,
    BookmarkSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    CategoryService,
    BookmarkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
