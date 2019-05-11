import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Characters, Character } from "./../../models/people";
import { BaseService } from "../base.service";

@Injectable({
  providedIn: "root"
})
export class PeopleService extends BaseService<Characters,Character> {
  constructor(private httpClient: HttpClient) {
    super(httpClient, "people");
  }
}
