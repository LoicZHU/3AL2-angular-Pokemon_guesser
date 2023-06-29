import { Component, OnInit } from '@angular/core';
import { CoreService } from './core/services/core/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private core: CoreService) {}

  ngOnInit(): void {
    this.core.saveData();
  }
  title = 'pokemon-guesser';
}
