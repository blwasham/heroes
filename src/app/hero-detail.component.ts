import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common'
import { Hero } from './hero';

import 'rxjs/add/operator/switchMap';

import { HeroService } from './hero.service';

// To define a component, you always import the Component symbol.
// The @Component decorator provides the Angular metadata for the component.

// All this component does is receive a hero object
// through its hero input property and then bind to
// that property with its template.

//component metadata
@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})

//You must declare a target binding property to be
//an input property. Otherwise, Angular rejects the binding and throws an error.
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    .subscribe(hero => this.hero = hero);
}
goBack(): void {
  this.location.back();
}


}
