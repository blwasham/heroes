"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
//import { Hero } from './hero';
//used with route parameters Observable
require("rxjs/add/operator/switchMap");
var hero_service_1 = require("./hero.service");
// To define a component, you always import the Component symbol.
// The @Component decorator provides the Angular metadata for the component.
// All this component does is receive a hero object
// through its hero input property and then bind to
// that property with its template.
//component metadata
var HeroDetailComponent = (function () {
    //@Input() hero: Hero;
    function HeroDetailComponent(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
    }
    //switchmap operator maps id in Observable route parameters to a
    // new observable which is the result of getHero method
    //if user re-navigates to this while getHero is still in process
    // switchMap cancels old request and calls getHero again
    // params are always strings so + operator below converts it to a number
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.heroService.getHero(+params['id']); })
            .subscribe(function (hero) { return _this.hero = hero; });
    };
    // persist hero name change to heroService, then go back
    HeroDetailComponent.prototype.save = function () {
        var _this = this;
        this.heroService.update(this.hero)
            .then(function () { return _this.goBack(); });
    };
    HeroDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return HeroDetailComponent;
}());
HeroDetailComponent = __decorate([
    core_1.Component({
        selector: 'hero-detail',
        templateUrl: './hero-detail.component.html',
        styleUrls: ['./hero-detail.component.css']
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService,
        router_1.ActivatedRoute,
        common_1.Location])
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map