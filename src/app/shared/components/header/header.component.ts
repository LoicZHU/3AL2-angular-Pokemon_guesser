import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  routes: ReadonlyArray<{ path: string; label: string }> = [
    { path: '/admin', label: 'Administration' },
    { path: '/pokemons', label: 'Pokémons' },
    { path: '/', label: 'Jeu' },
  ];
}
