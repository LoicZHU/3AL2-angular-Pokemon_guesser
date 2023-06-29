import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../../core/interface/pokemon.interface';
import { CoreService } from '../../core/services/core/core.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
  private _numberParam = 0;
  private _pokemonsCount = 0;

  pokemon?: Pokemon;

  constructor(
    private readonly core: CoreService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {}

  set numberParam(value: number) {
    this._numberParam = value;
  }

  set pokemonsCount(value: number) {
    this._pokemonsCount = value;
  }

  async ngOnInit(): Promise<void> {
    this.numberParam = Number(this.route.snapshot.paramMap.get('number'));
    this.pokemonsCount = this.core.getAll().length;

    await this.verifyNumberParam(this._numberParam, this._pokemonsCount);
    this.getPokemonByNumber(this._numberParam);
  }

  private getPokemonByNumber(number: number) {
    this.pokemon = this.core.getOneByField(number);
  }

  private async verifyNumberParam(number: number, count: number): Promise<void> {
    const isNumberValid = Boolean(number) && number >= 1 && number <= count;
    if (isNumberValid) {
      return;
    }

    await this.router.navigateByUrl('/');
  }
}
