import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  topHeroes: Hero[] = [];

  constructor(private heroService: HeroService) {

  }

  ngOnInit(){
    this.getTopHeroes();
  }

  getTopHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(value => this.topHeroes = value.slice(1,5));
  }
}