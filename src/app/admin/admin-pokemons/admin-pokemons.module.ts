import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPokemonsRoutingModule } from './admin-pokemons-routing.module';
import { AdminPokemonComponent } from './admin-pokemon/admin-pokemon.component';
import { BoolTransformPipe } from 'src/app/shared/pipes/bool-transform.pipe';
import { PokemoneImagePipe } from 'src/app/shared/pipes/pokemone-image.pipe';
import { AdminAddPokemonComponent } from './admin-add-pokemon/admin-add-pokemon.component';

@NgModule({
  declarations: [AdminPokemonComponent, BoolTransformPipe, PokemoneImagePipe, AdminAddPokemonComponent],
  imports: [CommonModule, AdminPokemonsRoutingModule],
})
export class AdminPokemonsModule {}
