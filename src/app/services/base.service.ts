import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

export abstract class BaseService<Tbase, Tresult> {
  readonly baseUrl: string = "https://swapi.co/api/";
  readonly httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient, private nameOfResource: string) {}

  private getUrl(nameOfResource: string, argument: string = ""): string {
    return `${this.baseUrl}${nameOfResource}/${argument}`;
  }

  getAll(): Observable<Tbase> {
    return this.http
      .get<Tbase>(this.getUrl(this.nameOfResource), this.httpOptions)
      .pipe(tap(_ => console.log(_)));
  }

  getById(id: number): Observable<Tresult> {
    return this.http
      .get<Tresult>(
        this.getUrl(this.nameOfResource, id.toString()),
        this.httpOptions
      )
      .pipe(tap(_ => console.log(_)));
  }
}
