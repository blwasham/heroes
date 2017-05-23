import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

//HttpModule contains providers for a complete set of HTTP services
import { HttpModule } from '@angular/http';

//import { RouterModule } from '@angular/router'; // make router module available
import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
// InMemoryWebApiModule simulates communciation with remote server
// by replacing Http client XHR backend with in-memory alternative
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

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
    // import FormsModule before binding with [(ngModel)]
    FormsModule,
    HttpModule,
    // forRoot config takes inMemService and primes in-memory db
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
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
