// Defines the same AppComponent as the one in the QuickStart playground.
// It is the root component of what will become a tree of nested components
// as the application evolves.
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  { name = 'Angular'; }
