import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoreService } from './core/services/core/core.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private core: CoreService) {}

  saveDataSubscription!: Subscription;

  ngOnInit(): void {
    this.saveDataSubscription = this.core.saveData().subscribe((res) => {
      const jsonData = JSON.stringify(res);
      localStorage.setItem('jsonData', jsonData);
    });
  }

  ngOnDestroy(): void {
    this.saveDataSubscription.unsubscribe();
  }
  title = 'pokemon-guesser';
}
