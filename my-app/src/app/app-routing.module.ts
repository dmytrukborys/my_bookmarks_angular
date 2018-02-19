import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent} from './bookmarks/bookmarks.component';
import { CategoriesComponent} from './categories/categories.component';
import { BookmarkDetailComponent } from './bookmark-detail/bookmark-detail.component';
import { AppComponent} from './app.component';


const routes: Routes = [
  { path: 'app-component', component: AppComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'bookmarks', component: BookmarksComponent },
  { path: 'edit/:id', component: BookmarkDetailComponent },
  { path: '', redirectTo: '/bookmarks', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
