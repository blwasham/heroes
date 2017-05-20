import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common'
import { Hero } from './hero';

//used with route parameters Observable
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

  //switchmap operator maps id in Observable route parameters to a
  // new observable which is the result of getHero method

  //if user re-navigates to this while getHero is still in process
  // switchMap cancels old request and calls getHero again
  // params are always strings so + operator below converts it to a number
  ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    .subscribe(hero => this.hero = hero);
}
goBack(): void {
  this.location.back();
}


}
