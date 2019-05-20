import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

export abstract class BaseService<TBase, TResult> {
  readonly baseUrl: string = "https://swapi.co/api/";
  readonly httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient, private nameOfResource: string) {}

  private getUrl(nameOfResource: string, argument: string = ""): string {
    return `${this.baseUrl}${nameOfResource}/${argument}`;
  }

  getAll(): Observable<TBase> {
    return this.http
      .get<TBase>(this.getUrl(this.nameOfResource), this.httpOptions)
      .pipe(tap(_ => console.log(_)));
  }

  getById(id: number): Observable<TResult> {
    return this.http
      .get<TResult>(
        this.getUrl(this.nameOfResource, id.toString()),
        this.httpOptions
      )
      .pipe(tap(_ => console.log(_)));
  }
}
