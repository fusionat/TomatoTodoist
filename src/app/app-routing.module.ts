import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CharacterContainerComponent } from "./components/character/character-container/character-container.component";
import { CharacterDetailsComponent } from "./components/character/character-details/character-details.component";
import { AppComponent } from './app.component';

const characterRoutes: Routes = [
  { path: "details/:id", component: CharacterDetailsComponent }
];
const routes: Routes = [
  {
    path: "character",
    component: CharacterContainerComponent,
    children: characterRoutes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
