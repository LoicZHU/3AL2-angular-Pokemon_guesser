import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonsComponent } from './pokemons.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [PokemonsListComponent, PokemonDetailsComponent, PokemonsComponent, PokemonCardComponent],
  imports: [CommonModule, PokemonsRoutingModule],
})
export class PokemonsModule {}
