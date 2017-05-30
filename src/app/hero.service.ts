  import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Hero } from './hero';

// @Injectable() decorator tells TypeScript to emit
// metadata about the service. The metadata specifies
// that Angular may need to inject other dependencies
// into this service.
@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api
  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    // http.get returns RxJS Observable which helps manage async dataflows
    return this.http.get(this.heroesUrl)
               .toPromise()
               //then callback extracts data from response
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }

  // in real life you would handle the error in code
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  // fetch a hero by id
  getHero(id: number): Promise<Hero> {
  const url = `${this.heroesUrl}/${id}`;
  return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Hero)
    .catch(this.handleError);
  }

private headers = new Headers({'Content-Type': 'application/json'});

//use put request to persist server-side changes
//put body is the json string encoding of the hero (ie - JSON.stringify(hero)
update(hero: Hero): Promise<Hero> {
  const url = `${this.heroesUrl}/${hero.id}`;
  return this.http
    .put(url, JSON.stringify(hero), {headers: this.headers})
    .toPromise()
    .then(() => hero)
    .catch(this.handleError);
}

create(name: string): Promise<Hero> {
  return this.http
    .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data as Hero)
    .catch(this.handleError);
}

delete(id: number): Promise<void> {
  const url = `${this.heroesUrl}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
}

}
