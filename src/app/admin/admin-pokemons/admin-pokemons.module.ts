import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPokemonsRoutingModule } from './admin-pokemons-routing.module';
import { AdminPokemonComponent } from './admin-pokemon/admin-pokemon.component';
import { BoolTransformPipe } from 'src/app/shared/pipes/bool-transform.pipe';
import { AdminAddPokemonComponent } from './admin-add-pokemon/admin-add-pokemon.component';
import { SharedModulesModule } from '../../shared/shared-modules/shared-modules.module';

@NgModule({
  declarations: [AdminPokemonComponent, BoolTransformPipe, AdminAddPokemonComponent],
  imports: [CommonModule, AdminPokemonsRoutingModule, SharedModulesModule],
})
export class AdminPokemonsModule {}
