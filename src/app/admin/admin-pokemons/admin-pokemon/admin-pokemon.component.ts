import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/core/interface/pokemon.interface';
import { CoreService } from 'src/app/core/services/core/core.service';
import { BoolTransformPipe } from 'src/app/shared/pipes/bool-transform.pipe';

@Component({
  selector: 'app-admin-pokemon',
  templateUrl: './admin-pokemon.component.html',
  styleUrls: ['./admin-pokemon.component.scss'],
})
export class AdminPokemonComponent implements OnInit {
  constructor(private core: CoreService, private router: Router) {}

  pokemonsList: Pokemon[] = [];

  ngOnInit(): void {
    this.pokemonsList = this.core.getAll();
  }

  onAddBtnClick() {
    this.router.navigateByUrl('/admin/add').catch((e) => console.log(e));
  }
}
