import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// @Injectable() decorator tells TypeScript to emit
// metadata about the service. The metadata specifies
// that Angular may need to inject other dependencies
// into this service.
@Injectable()
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }
}
