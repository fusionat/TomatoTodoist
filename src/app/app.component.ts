import { Characters } from './models/people';
import { PeopleService } from './services/swapi/people.service';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './reducers/index';
import { LoadPeople } from './actions/people.actions';
import { getPeople } from './selectors/people.selector';
import { Observable } from 'rxjs';
import { async } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SWAPi ANGULAR';
  characters$: Observable<Characters> = this.store.pipe(select(getPeople));
  constructor(private store: Store<AppState>){
  }

  onClick() {
    this.store.dispatch(new LoadPeople())
  }
}
