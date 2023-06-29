import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddPokemonComponent } from './admin-add-pokemon.component';

describe('AdminAddPokemonComponent', () => {
  let component: AdminAddPokemonComponent;
  let fixture: ComponentFixture<AdminAddPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminAddPokemonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminAddPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
