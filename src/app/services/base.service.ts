import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap, flatMap } from "rxjs/operators";
import { Helpers } from "./../helpers/helpers";
import { GroupModels } from './../models/group-models.model';
import { BaseModel } from './../models/base.model';

export abstract class BaseService<TResult extends BaseModel> {
  readonly baseUrl: string = "https://swapi.co/api/";
  readonly httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient, private nameOfResource: string) {}

  private getUrl(nameOfResource: string, argument: string = ""): string {
    return `${this.baseUrl}${nameOfResource}/${argument}`;
  }

  getAll(): Observable<GroupModels<TResult>> {
    return this.http
      .get<GroupModels<TResult>>(this.getUrl(this.nameOfResource), this.httpOptions)
      .pipe(
        flatMap((obj: GroupModels<TResult>) => {          
          obj.results.forEach((element: TResult) => {
            element.id = Helpers.getIdFromUrl(element.url);
          });
          return of(obj);
        })
      );
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
