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
  alert(msg?: string)      { window.alert(msg); }
  deleteHero(hero?:Hero):void{

    this.alert(`Delete ${hero?hero.name: "the hero"}`);
  }
  onSave(event?: MouseEvent){
    const evtMsg = event ? ' Event target is ' + (event.target as HTMLElement).textContent : '';
    this.alert('Saved.' + evtMsg);
    if (event) { event.stopPropagation(); }
  }
  fontSizePx = 16;
}
