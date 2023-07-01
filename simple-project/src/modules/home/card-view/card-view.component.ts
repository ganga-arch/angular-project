import { Component, Input } from '@angular/core';

@Component({
  selector: 'spi-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent {
  @Input() public data:any = []
}
