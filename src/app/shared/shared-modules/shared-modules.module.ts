import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemoneImagePipe } from '../pipes/pokemone-image.pipe';

@NgModule({
  declarations: [PokemoneImagePipe],
  imports: [CommonModule],
  exports: [PokemoneImagePipe],
})
export class SharedModulesModule {}
