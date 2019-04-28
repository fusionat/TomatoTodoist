import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Characters } from './../../models/people';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const peopleBaseUrl = "https://swapi.co/api/people";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) {

   }

   getPeople() : Observable<Characters> {
     return this.http.get<Characters>(peopleBaseUrl, httpOptions)
     .pipe(tap(_ =>  console.log(_)))
   }
}
