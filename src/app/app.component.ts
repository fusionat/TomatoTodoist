import { Character } from './models/characters';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './reducers/index';
import { LoadCharacters } from './actions/people.actions';
import { getCharacters, getCharacterByName } from './selectors/characters.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SWAPI ANGULAR';
  constructor(private store: Store<AppState>){
   
  }
}
