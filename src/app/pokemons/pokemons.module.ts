import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonsComponent } from './pokemons.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { SharedModulesModule } from '../shared/shared-modules/shared-modules.module';

@NgModule({
  declarations: [PokemonsListComponent, PokemonDetailsComponent, PokemonsComponent, PokemonCardComponent],
  imports: [CommonModule, PokemonsRoutingModule, SharedModulesModule],
})
export class PokemonsModule {}
