import { Component } from '@angular/core';

// routerLink directive provided by RouterModule
// string tells router where to navigate
// this is now called a router component
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
}
