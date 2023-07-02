import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, tap } from 'rxjs';
import { Pokemon } from 'src/app/core/interface/pokemon.interface';
import { CoreService } from 'src/app/core/services/core/core.service';

@Component({
  selector: 'app-admin-add-pokemon',
  templateUrl: './admin-add-pokemon.component.html',
  styleUrls: ['./admin-add-pokemon.component.scss'],
})
export class AdminAddPokemonComponent implements OnInit, OnDestroy {
  enableTypesDmg: boolean = false;
  routerSubscription: Subscription = new Subscription();
  isUpdate: boolean = false;
  pokemonId!: number;

  pokemonsForm: FormGroup = new FormGroup({
    number: new FormControl(null),
    name: new FormControl(null, Validators.required),
    types: new FormControl(null),
    type1: new FormControl(null),
    type2: new FormControl(null, Validators.required),
    height: new FormControl(null, Validators.required),
    weight: new FormControl(null, Validators.required),
    malePct: new FormControl(null),
    femalePct: new FormControl(null),
    captRate: new FormControl(null),
    expPoints: new FormControl(null),
    expSpeed: new FormControl(null),
    baseTotal: new FormControl(null),
    hp: new FormControl(null, Validators.required),
    attack: new FormControl(null, Validators.required),
    defense: new FormControl(null, Validators.required),
    special: new FormControl(null, Validators.required),
    speed: new FormControl(null, Validators.required),
    normalDmg: new FormControl(null),
    fireDmg: new FormControl(null),
    waterDmg: new FormControl(null),
    electricDmg: new FormControl(null),
    grassDmg: new FormControl(null),
    iceDmg: new FormControl(null),
    fightDmg: new FormControl(null),
    poisonDmg: new FormControl(null),
    groundDmg: new FormControl(null),
    flyingDmg: new FormControl(null),
    psychicDmg: new FormControl(null),
    bugDmg: new FormControl(null),
    rockDmg: new FormControl(null),
    ghostDmg: new FormControl(null),
    dragonDmg: new FormControl(null),
    evolutions: new FormControl(null),
    legendary: new FormControl(null, Validators.required),
  });

  constructor(private core: CoreService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      this.pokemonId = res['id?'];
      if (this.pokemonId) {
        this.isUpdate = true;
        const pokemon: Pokemon | undefined = this.core.getOneByField(this.pokemonId);
        this.pokemonsForm.setValue(pokemon as Pokemon);
      } else {
        this.isUpdate = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  onAddBtnClick(): void {
    const data: Pokemon = this.pokemonsForm.value;
    this.core.create(data);

    alert('pokemon ajouter');
    this.router.navigateByUrl('/admin/admin').catch((e) => console.log(e));
  }

  onUpdateBtnClick(): void {
    const data: Pokemon = this.pokemonsForm.value;
    this.core.updateByField(this.pokemonId, data);

    //this.router.navigateByUrl('/admin/admin').catch((e) => console.log(e));
  }
}
