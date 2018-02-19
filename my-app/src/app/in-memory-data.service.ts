import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const bookmarks = [
      { id: 1, title: 'vkontakte', category: 'social networks', url: 'https://vk.com'},
      { id: 2, title: 'facebook', category: 'social networks', url: 'https://fb.com'},
      { id: 3, title: 'twitter', category: 'social networks', url: 'https://twitter.com/'},
      { id: 4, title: 'Angular2 tutorial', category: 'studying', url: 'https://angular.io/tutorial/'},
      { id: 5, title: 'Studying JavaScript', category: 'studying', url: 'https://learn.javascript.ru'},
      { id: 6, title: 'Loftblog', category: 'studying', url: 'https://loftblog.ru/'},
      { id: 7, title: 'stackblitz', category: 'coding', url: 'https://stackblitz.com/'},
      { id: 8, title: 'codepen', category: 'coding', url: 'https://codepen.io'},
      { id: 9, title: 'youtube', category: 'pleasures', url: 'https://youtube.com'},
      { id: 10, title: 'vimeo', category: 'pleasures', url: 'https://vimeo.com/'}
    ];
    return {bookmarks};
  }
}
