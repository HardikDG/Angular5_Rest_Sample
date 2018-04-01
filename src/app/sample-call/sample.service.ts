import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

import { Sample } from './sample';
import { HttpErrorHandler, HandleError } from '../http-handlers/http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'sample':"Sample"
  })
};

@Injectable()
export class SampleService {
  liveurl = "http://jsonplaceholder.typicode.com/posts";
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('SampleService');
  }

  /** GET heroes from the server */
  getHeroes (): Observable<Sample[]> {
    return this.http.get<Sample[]>(this.liveurl)
      .pipe(
        catchError(this.handleError('getHeroes', []))
      );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Sample[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
     { params: new HttpParams().set('name', term) } : {};

    return this.http.get<Sample[]>(this.liveurl, options)
      .pipe(
        catchError(this.handleError<Sample[]>('searchHeroes', []))
      );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the database */
  addHero (sampleObj: Sample): Observable<Sample> {
    console.log(httpOptions);
    return this.http.post<Sample>(this.liveurl, sampleObj,httpOptions)
      .pipe(
        catchError(this.handleError('addHero', sampleObj))
      );
  }

  /** DELETE: delete the hero from the server */
  deleteHero (id: number): Observable<{}> {
    const url = `${this.liveurl}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteHero'))
      );
  }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
  updateHero (sampleObj: Sample): Observable<Sample> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<Sample>(this.liveurl, sampleObj, httpOptions)
      .pipe(
        catchError(this.handleError('updateHero', sampleObj))
      );
  }
}

