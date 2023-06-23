import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('500ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        style({transform: 'translateX(-200%)'}),
        animate('500ms ease-out', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'simple-project';
  public data: boolean = false;
  public num: number = 7;
  public unde: undefined;
  public nul: null = null;
  public obj:object = {};
  public arr: number[] = [1,2,3,4]
  public classdata : string = 'classsData';
  public blue = 'blue';
  constructor() {

  }

  ngOnInit(): void {

    setTimeout(() => {
    this.classdata = 'newClass';
      
    }, 3000);
  }

  checkClickevent = (): void => {
    alert('hellllo')
  }
}
