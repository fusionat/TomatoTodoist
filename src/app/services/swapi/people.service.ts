import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Character } from "../../models/characters";
import { BaseService } from "../base.service";

@Injectable({
  providedIn: "root"
})
export class CharactorsService extends BaseService<Character> {
  constructor(private httpClient: HttpClient) {
    super(httpClient, "people");
  }
}
