import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './pokemons.component';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonsComponent,
    children: [
      { path: ':number', component: PokemonDetailsComponent },
      { path: '', component: PokemonsListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonsRoutingModule {}
