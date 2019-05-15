import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Characters, Character } from "../../models/characters";
import { BaseService } from "../base.service";

@Injectable({
  providedIn: "root"
})
export class CharactorsService extends BaseService<Characters,Character> {
  constructor(private httpClient: HttpClient) {
    super(httpClient, "people");
  }
}
