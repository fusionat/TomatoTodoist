import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { PeopleListComponent } from "./people-list/people-list.component";
import { PeopleListItemComponent } from "./people-list-item/people-list-item.component";
import { PeopleContainerComponent } from "./people-container/people-container.component";

@NgModule({
  declarations: [
    PeopleListComponent,
    PeopleListItemComponent,
    PeopleContainerComponent
  ],
  exports: [PeopleListComponent,PeopleContainerComponent],
  imports: [CommonModule, MatListModule, MatIconModule, MatButtonModule, MatCardModule]
})
export class PeopleModule {}
