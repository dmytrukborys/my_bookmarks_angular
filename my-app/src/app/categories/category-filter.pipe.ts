import { Pipe, PipeTransform } from '@angular/core';

import { Bookmark } from '../bookmark';

@Pipe({
  name: 'categoryfilter',
  pure: false
})
export class CategoryFilterPipe implements PipeTransform {
  transform(items: Bookmark[], filter: string): Bookmark[] {
    if (!items || !filter || filter === "*") {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Bookmark) => this.applyFilter(item, filter));
  }

  applyFilter(book: Bookmark, filter: string): boolean {
    return book.category === filter;
  }
}
