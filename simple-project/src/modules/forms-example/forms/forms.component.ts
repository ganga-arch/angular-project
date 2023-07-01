import { Component } from '@angular/core';

@Component({
  selector: 'spi-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
public cardItemList:any = [
  {name: 'third card',path:'reactiveForms'},
  {name: 'fourth card',path:'templateForms'},
];

public  panelOpenState = false;
}
