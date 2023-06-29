import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Pokemon } from '../../core/interface/pokemon.interface';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCardComponent {
  @Input() pokemon?: Pokemon;
}
