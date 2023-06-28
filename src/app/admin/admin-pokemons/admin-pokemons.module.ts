import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPokemonsRoutingModule } from './admin-pokemons-routing.module';
import { AdminPokemonComponent } from './admin-pokemon/admin-pokemon.component';

@NgModule({
  declarations: [AdminPokemonComponent],
  imports: [CommonModule, AdminPokemonsRoutingModule],
})
export class AdminPokemonsModule {}
