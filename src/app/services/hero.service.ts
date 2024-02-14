import { Injectable } from '@angular/core';
import { Hero} from "../models/heroes";
import { HEROES} from "../models/mock-heroes";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes():Observable<Hero[]>{
    const heroes = of(HEROES);
    return heroes;
  }
}
