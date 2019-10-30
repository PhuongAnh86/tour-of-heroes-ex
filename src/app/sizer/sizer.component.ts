import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sizer',
  template: `<div>
  <button title="Smaller" (click)="dec()">-</button>
  <button title="Bigger" (click)="inc()">+</button>
  <label [style.font-size.px]="size">FontSize: {{size}}</label>
  </div>`
})
export class SizerComponent implements OnInit {
  @Input() size:number | string;
  @Output() sizeChange= new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  inc(){this.resize(1);}
  dec(){this.resize(-1);}
 resize(delta:number){
   this.size=Math.min(40, Math.max(8,+this.size+delta)) ;
   this.sizeChange.emit(this.size);
 }
}
