import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class SelectedCategoryService {

  private categorySource = new BehaviorSubject("*");
  currentCategory = this.categorySource.asObservable();

  constructor() { }

  changeCategory(category: string) {
    this.categorySource.next(category)
  }

}
