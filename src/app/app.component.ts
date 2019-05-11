import { Characters } from './models/people';
import { PeopleService } from './services/swapi/people.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tomato-todoist';
  characters: Characters
  constructor(private ps: PeopleService){
    ps.getAll().subscribe((data) => {
      this.characters = data;
      console.log(data);
    })
  }
}
