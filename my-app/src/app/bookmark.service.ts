import {Injectable} from '@angular/core';
import {Bookmark} from './bookmark';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BookmarkService {

  private bookmarksUrl = 'api/bookmarks';



  getBookmarks(): Observable<Bookmark[]> {
    return this.http.get<Bookmark[]>(this.bookmarksUrl)
      .pipe(catchError(this.handleError('getBookmarks',[]))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /**  getBookmark by id. Will 404 if id not found */

  getBookmark(id: number): Observable<Bookmark>{
    const url = `${this.bookmarksUrl}/${id}`;
    return this.http.get<Bookmark>(url).pipe(
      catchError(this.handleError<Bookmark>(`getBookmark id=${id}`))
      );
  }

  /** PUT: update the bookmark on the server */
  updateBookmark (bookmark: Bookmark): Observable<any> {
    return this.http.put(this.bookmarksUrl, bookmark, httpOptions).pipe(
      catchError(this.handleError<any>('updateBookmark'))
    );
  }

  // POST: add a new bookmark to the server
  addBookmark (bookmark: Bookmark): Observable<Bookmark> {
    return this.http.post<Bookmark>(this.bookmarksUrl, bookmark, httpOptions).pipe(
      tap(bookmark => console.log(bookmark)),
      catchError(this.handleError<Bookmark>('addBookmarks'))
    );
  }


  /** DELETE: delete the bookmark from the server */
  deleteBookmark (bookmark: Bookmark | number): Observable<Bookmark> {
    const id = typeof bookmark === 'number' ? bookmark : bookmark.id;
    const url = `${this.bookmarksUrl}/${id}`;

    return this.http.delete<Bookmark>(url, httpOptions).pipe(
      catchError(this.handleError<Bookmark>('deleteBookmark'))
    );
  }

  /* GET bookmarks whose name contains search term */
  searchBookmarks(term: string): Observable<Bookmark[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Bookmark[]>(`api/bookmarks/?title=${term}`).pipe(
      catchError(this.handleError<Bookmark[]>('searchBookmarks', []))
    );
  }


  constructor(
    private http: HttpClient) { }

}
