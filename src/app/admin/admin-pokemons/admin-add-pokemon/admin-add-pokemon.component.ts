import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-add-pokemon',
  templateUrl: './admin-add-pokemon.component.html',
  styleUrls: ['./admin-add-pokemon.component.scss'],
})
export class AdminAddPokemonComponent {
  pokemonsForm: FormGroup = new FormGroup({
    number: new FormControl(null),
    name: new FormControl(null, Validators.required),
    types: new FormControl(null),
    type1: new FormControl(null),
    type2: new FormControl(null, Validators.required),
    height: new FormControl(null),
    weight: new FormControl(null),
    malePct: new FormControl(null),
    femalePct: new FormControl(null),
    captRate: new FormControl(null),
    expPoints: new FormControl(null),
    expSpeed: new FormControl(null),
    baseTotal: new FormControl(null),
    hp: new FormControl(null),
    attack: new FormControl(null),
    defense: new FormControl(null),
    special: new FormControl(null),
    speed: new FormControl(null),
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
    legendary: new FormControl(null),
    dynamicTypes: new FormArray([]),
  });

  get dynamicTypes(): FormArray {
    return this.pokemonsForm.get('dynamicTypes') as FormArray;
  }

  selectTypes(): void {
    if (this.pokemonsForm.value.type1 != null) {
      const type = this.pokemonsForm.value.type1;
      this.dynamicTypes.push(new FormControl(type + 'Dmg'));
    }
  }

  constructor() {}

  onAddBtnClick() {
    console.log(this.pokemonsForm.value);
  }
}
