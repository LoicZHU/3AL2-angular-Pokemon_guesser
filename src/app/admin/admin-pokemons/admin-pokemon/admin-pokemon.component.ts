import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/core/interface/pokemon.interface';
import { CoreService } from 'src/app/core/services/core/core.service';
import { BoolTransformPipe } from 'src/app/shared/pipes/bool-transform.pipe';

@Component({
  selector: 'app-admin-pokemon',
  templateUrl: './admin-pokemon.component.html',
  styleUrls: ['./admin-pokemon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPokemonComponent implements OnInit {
  constructor(private core: CoreService, private router: Router) {}

  pokemonsList: Pokemon[] = [];

  ngOnInit(): void {
    this.pokemonsList = this.core.getAll();
  }

  onAddBtnClick() {
    this.router.navigateByUrl('/admin/add/').catch((e) => console.log(e));
  }

  updatePokemon(pokemon: Pokemon): void {
    this.router.navigateByUrl('/admin/add/' + pokemon.number).catch((e) => console.log(e));
  }

  deletePokemon(pokemon: Pokemon): void {
    const index = this.pokemonsList.findIndex((item: Pokemon) => item.number === pokemon.number);
    this.core.delete(index);
    this.pokemonsList = this.core.getAll();
  }

  duplicatePokemon(pokemon: Pokemon) {
    //const currentId: number = this.pokemonsList.length;
    const data: Pokemon = pokemon;
    this.core.create(data);
    this.pokemonsList = this.core.getAll();
  }
}
