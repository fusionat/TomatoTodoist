import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { SwapiPeople } from './../../models/people';

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

   getPeople() : Observable<SwapiPeople.People> {
     return this.http.get<SwapiPeople.People>(peopleBaseUrl, httpOptions)
     .pipe(tap(_ =>  console.log(_)))
   }
}
