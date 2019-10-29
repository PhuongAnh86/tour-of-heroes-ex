import { Component, AfterViewInit, OnInit } from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'app-root',
 templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    this.resetHeroes();
    /* this.setCurrentClasses();
    this.setCurrentStyles(); */
  }
  
  title = 'Template Syntax'; 
  heroImageUrl = 'http://www.wpclipart.com/cartoon/people/hero/hero_silhoutte_T.png';
  getVal(): number { return 2; }
  hero: Hero;
  currentHero:Hero;
  heroes:Hero[];
  name:string=Hero.heroes[0].name;
  resetHeroes():void{
    this.heroes = Hero.heroes.map(hero => hero.clone());
    this.currentHero = this.heroes[0];
    this.hero = this.currentHero;
    /* this.heroesWithTrackByCountReset = 0; */
  }
}
