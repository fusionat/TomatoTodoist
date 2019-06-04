import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { CharacterListComponent } from "./character-list/character-list.component";
import { CharacterContainerComponent } from "./character-container/character-container.component";
import { CharacterDetailsComponent } from './character-details/character-details.component';

@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterContainerComponent,
    CharacterDetailsComponent
  ],
  exports: [CharacterListComponent,CharacterContainerComponent],
  imports: [CommonModule, MatListModule, MatIconModule, MatButtonModule, MatCardModule]
})
export class CharacterModule {}
