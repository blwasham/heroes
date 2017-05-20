// Defines the same AppComponent as the one in the QuickStart playground.
// It is the root component of what will become a tree of nested components
// as the application evolves.
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

// [(ngModel)] is the Angular syntax to bind the hero.name property to the textbox
// Although NgModel is a valid Angular directive, it isn't available by default.
// It belongs to the optional FormsModule

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

// component properties
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService
  ) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  // lifecycle hook to get hero data when component acxtivates
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  //pass two-element link parameters array
  // to router navigate method
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
