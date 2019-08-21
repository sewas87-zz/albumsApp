import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private  http: HttpClient
  ) { }

  login(userId: number): Observable<any> {
    return this.http.put( 'https://jsonplaceholder.typicode.com/users/' +  userId ).pipe(
      tap((res ) => {
          localStorage.set("ACCESS_TOKEN", res);
      })
    );
  }

  // public isLoggedIn() {
  //   return localStorage.getItem('ACCESS_TOKEN') !== null;
  //
  // }
  //
  // public logout() {
  //   localStorage.removeItem('ACCESS_TOKEN');
  // }
}
