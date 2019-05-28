
import { Component, OnInit } from "@angular/core";
import { Characters, Character } from "../../../models/characters";
import { Store, select } from "@ngrx/store";
import { AppState } from "../../../reducers/index";
import { LoadCharacters } from "../../../actions/people.actions";
import { Observable } from "rxjs";
import {
  getCharacters,
  getCharacterByName
} from "../../../selectors/characters.selector";

@Component({
  selector: "app-people-list",
  templateUrl: "./people-list.component.html",
  styleUrls: ["./people-list.component.css"]
})
export class PeopleListComponent implements OnInit {
  characters$: Observable<Characters> = this.store.pipe(select(getCharacters));
  character$: Observable<Character> = this.store.pipe(
    select(getCharacterByName, { name: "Luke Skywalker" })
  );
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  onClick() {
    this.store.dispatch(new LoadCharacters());
  }
}
