import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPokemonComponent } from './admin-pokemon/admin-pokemon.component';
import { AdminAddPokemonComponent } from './admin-add-pokemon/admin-add-pokemon.component';

const routes: Routes = [
  { path: 'admin', component: AdminPokemonComponent },
  { path: 'add', component: AdminAddPokemonComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPokemonsRoutingModule {}
