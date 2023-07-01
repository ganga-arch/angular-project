import { Component } from '@angular/core';

@Component({
  selector: 'spi-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public cardItemList:any = [
    {name: 'first card',path:'forms/reactiveForms'},
    {name: 'second card',path:'forms/templateForms'},
    {name: 'third card',path:'/card1'},
    {name: 'fourth card',path:'/card1'},
    {name: 'fifth card',path:'/card1'},
    {name: 'first card',path:'/card1'},
    {name: 'second card',path:'/card1'},
    {name: 'third card',path:'/card1'},
  ]
  
}
