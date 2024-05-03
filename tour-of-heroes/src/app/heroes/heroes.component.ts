import { Component } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {
  /*
  hero: Hero = {
    id: 1,
    name: 'Windsor'
  };
  */
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService){  }

  ngOnInit(): void{
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeroes()
    .subscribe(x => this.heroes = x);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}