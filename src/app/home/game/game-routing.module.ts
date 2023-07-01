import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { GameAppComponent } from './game-app/game-app.component';

const routes: Routes = [
  { path: '', component: GameComponent },
  { path: 'game', component: GameAppComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRoutingModule {}
