import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonComponent } from './pokemon/pokemon.component';

@NgModule({
  declarations: [PokemonsListComponent, PokemonDetailsComponent, PokemonComponent],
  imports: [CommonModule, PokemonsRoutingModule],
})
export class PokemonsModule {}
