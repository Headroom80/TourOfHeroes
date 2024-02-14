import {Component, Input, OnInit} from '@angular/core';
import {Location, NgIf, UpperCasePipe} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Hero } from '../models/heroes';
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../services/hero.service";

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    UpperCasePipe,
    FormsModule,
  ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent implements OnInit{
  @Input() hero?: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}


    ngOnInit(): void {
      this.getHero();

  }
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }
}
