import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game/game.component';
import { GameAppComponent } from './game-app/game-app.component';
import { SharedModulesModule } from '../../shared/shared-modules/shared-modules.module';

@NgModule({
  declarations: [GameComponent, GameAppComponent],
  imports: [CommonModule, GameRoutingModule, SharedModulesModule],
})
export class GameModule {}
