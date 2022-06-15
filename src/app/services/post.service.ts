import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { API_URL, TOKEN_HEADER, TOKEN } from 'environment';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  public getPosts(): Observable<Object>{
    return this.http.get(
      `${API_URL}postings`, { headers: {
        'fr-access-token': TOKEN
      }},
    );
  }

  public getPostDetails(postId: string): Observable<Object>{
    return this.http.get(
      `${API_URL}postings/${postId}`, { headers: {
        'fr-access-token': TOKEN
      }},
    );
  }
}
