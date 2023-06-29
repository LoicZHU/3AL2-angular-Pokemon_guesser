import { PokemoneImagePipe } from './pokemone-image.pipe';

describe('PokemoneImagePipe', () => {
  it('create an instance', () => {
    const pipe = new PokemoneImagePipe();
    expect(pipe).toBeTruthy();
  });
});
