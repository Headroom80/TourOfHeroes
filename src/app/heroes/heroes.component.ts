import {Component, OnInit} from '@angular/core';
import { Hero } from '../models/heroes'
import {CommonModule, NgFor, UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
import { HeroService} from "../services/hero.service";
import {MessageService} from "../services/message.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    UpperCasePipe,
    FormsModule,
    NgFor,
    CommonModule,
    HeroDetailComponent,
    RouterLink
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit{
heroes:Hero[]=[];
constructor(private heroService: HeroService,private messageService: MessageService) {
}

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe({
        next: (heroes) => this.heroes = heroes,
        error: (error) => console.error(error),
        complete: () => console.log('Completed!')
      });

  }

  ngOnInit(): void {
    this.getHeroes()
  }


}
