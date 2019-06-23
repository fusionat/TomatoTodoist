import { Component, OnInit } from "@angular/core";
import { Character } from "./../../../models/characters";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { AppState } from "src/app/reducers";
import { getCharacterById } from "../../../selectors/characters.selector";

@Component({
  selector: "app-character-details",
  templateUrl: "./character-details.component.html",
  styleUrls: ["./character-details.component.css"]
})
export class CharacterDetailsComponent implements OnInit {
  character$: Observable<Character>;
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit() {
    this.loadCurrentCharacter();
  }

  loadCurrentCharacter() {
    this.route.paramMap
      .pipe(
        map((params: ParamMap) => {
          return Number(params.get("id"));
        })
      )
      .subscribe(id => {
        this.character$ = this.store.pipe(select(getCharacterById, { id: id }));
      });
  }
}
