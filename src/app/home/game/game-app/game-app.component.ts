import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pokemon } from 'src/app/core/interface/pokemon.interface';
import { CoreService } from 'src/app/core/services/core/core.service';

@Component({
  selector: 'app-game-app',
  templateUrl: './game-app.component.html',
  styleUrls: ['./game-app.component.scss'],
})
export class GameAppComponent implements OnInit, OnDestroy {
  routeSubscription: Subscription = new Subscription();
  level: string = '';
  shots!: number;
  selectedPokemons: Pokemon[] = [];
  pokemonToGuess!: Pokemon;

  constructor(private route: ActivatedRoute, private core: CoreService, private router: Router) {}

  ngOnInit(): void {
    this.routeSubscription = this.route.queryParams.subscribe((params) => {
      this.level = params['level'];

      const pokemons: Pokemon[] = this.core.getAll() as Pokemon[];
      if (this.level === 'easy') {
        this.shots = 10;
        this.selectedPokemons = this.getRandomElements(pokemons, 30);
      } else if (this.level === 'med') {
        this.shots = 7;
        this.selectedPokemons = this.getRandomElements(pokemons, 80);
      } else {
        this.shots = 4;
        this.selectedPokemons = this.getRandomElements(pokemons, 150);
      }

      const randomIndex = Math.floor(Math.random() * this.selectedPokemons.length);
      this.pokemonToGuess = this.selectedPokemons[randomIndex];

      this.selectedPokemons.forEach((pokemon) => {
        pokemon.blur = false;
      });
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  getRandomElements(pokemons: Pokemon[], count: number): Pokemon[] {
    const shuffled = pokemons.slice();
    let currentIndex = shuffled.length;
    const selected = [];

    while (count > 0 && currentIndex > 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      const temp = shuffled[currentIndex];
      shuffled[currentIndex] = shuffled[randomIndex];
      shuffled[randomIndex] = temp;

      selected.push(shuffled[currentIndex]);
      count--;
    }
    return selected;
  }

  pokemonsToRemove(pokemonsList: Pokemon[], pokemonToGuess: Pokemon, numberToRemove: number): void {
    for (let i = 0; i <= numberToRemove; i++) {
      const randomIndex = Math.floor(Math.random() * pokemonsList.length);
      if (pokemonsList[randomIndex] != pokemonToGuess) {
        pokemonsList.splice(randomIndex, 1);
      }
    }
    console.log(pokemonsList);
  }

  checkPokemon(pokemon: Pokemon): void {
    console.log(this.pokemonToGuess);
    if (this.pokemonToGuess != pokemon) {
      this.shots--;
      if (this.level == 'easy') {
        this.pokemonsToRemove(this.selectedPokemons, this.pokemonToGuess, 5);
      }
      if (this.level == 'med') {
        this.pokemonsToRemove(this.selectedPokemons, this.pokemonToGuess, 10);
      }
      if (this.level == 'hard') {
        this.pokemonsToRemove(this.selectedPokemons, this.pokemonToGuess, 15);
      }
    } else {
      alert('you win champ');
      this.router.navigateByUrl('/').catch((e) => console.error(e));
    }
    if (this.shots < 0) {
      alert('you have lost better luck next time');
      this.router.navigateByUrl('/').catch((e) => console.error(e));
    }
  }
}
