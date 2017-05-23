"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
//HttpModule contains providers for a complete set of HTTP services
var http_1 = require("@angular/http");
//import { RouterModule } from '@angular/router'; // make router module available
var app_routing_module_1 = require("./app-routing.module");
// Imports for loading & configuring the in-memory web api
// InMemoryWebApiModule simulates communciation with remote server
// by replacing Http client XHR backend with in-memory alternative
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
var app_component_1 = require("./app.component");
var hero_detail_component_1 = require("./hero-detail.component");
var heroes_component_1 = require("./heroes.component");
var hero_service_1 = require("./hero.service");
var dashboard_component_1 = require("./dashboard.component");
// declarations array contains list-style-type
// of app components, pipes, and directivews
// Component must be declared in module before
// other components can reference it
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            // import FormsModule before binding with [(ngModel)]
            forms_1.FormsModule,
            http_1.HttpModule,
            // forRoot config takes inMemService and primes in-memory db
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            hero_detail_component_1.HeroDetailComponent,
            heroes_component_1.HeroesComponent,
            dashboard_component_1.DashboardComponent
        ],
        providers: [
            hero_service_1.HeroService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map