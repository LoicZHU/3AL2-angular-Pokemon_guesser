import { AdminAddPokemonComponent } from './admin-pokemons/admin-add-pokemon/admin-add-pokemon.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./admin-pokemons/admin-pokemons.module').then((m) => m.AdminPokemonsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
