import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../core/services/core/core.service';
import { Pokemon } from '../../core/interface/pokemon.interface';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss'],
})
export class PokemonsListComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private readonly core: CoreService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemons = this.core.getAll();
  }

  trackByNumber(index: number, pokemon: Pokemon): number {
    return pokemon.number;
  }
}
