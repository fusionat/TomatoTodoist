import { SwapiPeople } from './models/people';
import { PeopleService } from './services/swapi/people.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tomato-todoist';
  people: SwapiPeople.People
  constructor(private ps: PeopleService){
    ps.getPeople().subscribe((data) => {
      this.people = data;
      console.log(data);
    })
  }
}
