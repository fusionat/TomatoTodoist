import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { GroupModels } from "./../models/group-models.model";
import { BaseModel } from "./../models/base.model";
import { RxJsHelper } from './../helpers/rxjs-helper';

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
      .get<GroupModels<TResult>>(
        this.getUrl(this.nameOfResource),
        this.httpOptions
      )
      .pipe(RxJsHelper.setId());
  }

  getById(id: number): Observable<TResult> {
    return this.http
      .get<TResult>(
        this.getUrl(this.nameOfResource, id.toString()),
        this.httpOptions
      )
      .pipe(RxJsHelper.setId());
  }
}
