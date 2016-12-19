import { Injectable } from '@angular/core';
import { Headers,Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()

export class HeroService{

  private heroesUrl = 'app/heroes';
  constructor( private http: Http) {}

  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}


  getHeroes(): Promise<Hero[]> {
  return this.http.get(this.heroesUrl)
             .toPromise()   //来自于 'rxjs/add/operator/toPromise';
             .then(response => response.json().data as Hero[]) //在 promise 的then回调中，我们调用 HTTP 的Reponse对象的json方法，以提取出其中的数据
             .catch(this.handleError)
}

getHeroesSlowly(): Promise<Hero[]> {
  return new Promise<Hero[]>(resolve =>
    setTimeout(resolve, 2000)) // delay 2 seconds
    .then(() => this.getHeroes());
}

getHero(id: number): Promise<Hero> {
  return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
}

}
