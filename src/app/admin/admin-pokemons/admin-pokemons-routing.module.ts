import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPokemonComponent } from './admin-pokemon/admin-pokemon.component';

const routes: Routes = [{ path: '', component: AdminPokemonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPokemonsRoutingModule {}
