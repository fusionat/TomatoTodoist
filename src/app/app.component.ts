import { Characters } from './models/people';
import { PeopleService } from './services/swapi/people.service';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './reducers/index';
import { LoadPeople } from './actions/people.actions';
import { getPeople } from './selectors/people.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tomato-todoist';
  characters: Characters
  constructor(private ps: PeopleService, private store: Store<AppState>){

    ps.getAll().subscribe((data) => {
      store.dispatch(new LoadPeople(data))
      this.characters = data;
      console.log(data);
    });
    ps.getById(1).subscribe((data) => {
      console.log(data);
    });

  }

  onClick() {
    alert(1);
    this.store.pipe(select(getPeople)).subscribe((s) => console.log(s))
  }
}
