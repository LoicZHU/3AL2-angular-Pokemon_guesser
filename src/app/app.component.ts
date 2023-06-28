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
    console.log(this.core.getAll());

    const eleme = this.core.getOneByField(1);

    this.core.create(eleme);

    console.log(this.core.getAll());

    this.core.delete(24);

    console.log(this.core.getAll());
  }
  title = 'pokemon-guesser';
}
