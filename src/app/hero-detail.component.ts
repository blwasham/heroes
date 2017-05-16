import { Component, Input } from '@angular/core';
import { Hero } from './hero';

// To define a component, you always import the Component symbol.
// The @Component decorator provides the Angular metadata for the component.

// All this component does is receive a hero object
// through its hero input property and then bind to
// that property with its template.

//component metadata
@Component({
  selector: 'hero-detail',
  template: `
  <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
  </div>
  `
})

//You must declare a target binding property to be
//an input property. Otherwise, Angular rejects the binding and throws an error.
export class HeroDetailComponent {
  @Input() hero: Hero;
}
