import { Characters } from './models/characters';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './reducers/index';
import { LoadCharacters } from './actions/people.actions';
import { getCharacters } from './selectors/characters.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SWAPI ANGULAR';
  characters$: Observable<Characters> = this.store.pipe(select(getCharacters));
  constructor(private store: Store<AppState>){
  }

  onClick() {
    this.store.dispatch(new LoadCharacters())
  }
}
