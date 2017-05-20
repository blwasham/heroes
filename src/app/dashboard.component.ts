import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  // define heroes array property
  heroes: Hero[] = [];

  // inject HeroService in constructor
  // and assign to private var
  constructor(private heroService: HeroService) {}

  // call getHeroes in oninit lifecycle hook
  // to load heroes on component load
  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => {
        this.heroes = heroes.slice(1,5)
      });
  }
}
