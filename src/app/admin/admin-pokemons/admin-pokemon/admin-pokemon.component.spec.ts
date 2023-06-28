import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPokemonComponent } from './admin-pokemon.component';

describe('AdminPokemonComponent', () => {
  let component: AdminPokemonComponent;
  let fixture: ComponentFixture<AdminPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminPokemonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
