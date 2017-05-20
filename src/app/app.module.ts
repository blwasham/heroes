import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router'; // make router module available

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
// declarations array contains list-style-type
// of app components, pipes, and directivews
// Component must be declared in module before
// other components can reference it
@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
// forRoot called b/c a configured router is provided at app's root
// method supplies router service providers and directives needed for routing
// and performs the initial navigation based on the current browser url
    RouterModule.forRoot([
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }, {
      path: 'heroes',
      component: HeroesComponent
    }, {
      path: 'dashboard',
      component: DashboardComponent
    }, {
  path: 'detail/:id',
  component: HeroDetailComponent
}])
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
