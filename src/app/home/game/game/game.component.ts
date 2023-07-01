import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  constructor(private router: Router) {}

  selectGameDiff(level: string): void {
    this.router.navigate(['/game'], { queryParams: { level: level } });
  }
}
