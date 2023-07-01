import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from 'src/app/core/interface/pokemon.interface';

@Pipe({
  name: 'pokemoneImage',
})
export class PokemoneImagePipe implements PipeTransform {
  transform(pokemon: Pokemon): string {
    const url = '../../../../../../assets/images/';
    var imageUrl: string = '';

    if (pokemon.number < 10) {
      imageUrl = url + '00' + pokemon.number + pokemon.name + '.webp';
    } else if (pokemon.number >= 10 && pokemon.number <= 99) {
      imageUrl = url + '0' + pokemon.number + pokemon.name + '.webp';
    } else {
      imageUrl = url + pokemon.number + pokemon.name + '.webp';
    }

    return imageUrl;
  }
}
