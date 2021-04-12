import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './Mock-heroes';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.MessageService.add('HeroService: fetched heroes');
    return heroes;
  }
  constructor(private MessageService: MessageService) { }
}

