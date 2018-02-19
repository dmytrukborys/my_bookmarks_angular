import {Injectable} from '@angular/core';
import {Category} from './category';
import {CATEGORIES} from './mock-categories';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class CategoryService {

  getCategories(): Observable<Category[]> {
    return of(CATEGORIES);
  }

  constructor() {
  }

}
