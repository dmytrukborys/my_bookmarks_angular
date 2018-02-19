import {Component, OnInit} from '@angular/core';
import {Category} from '../category';
import {CategoryService} from '../category.service';
import {SelectedCategoryService} from "../selected.category.service";


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  onSelectCategory(category: Category) : void {
    this.selectedCategoryService.changeCategory(category.name);
  }

  reset(category: Category) : void {
    this.selectedCategoryService.changeCategory("*");
  }

  categories: Category[];

  constructor(private categoryService: CategoryService, private selectedCategoryService: SelectedCategoryService) {
  }

  ngOnInit() {
    this.getCategories();
  }
}
