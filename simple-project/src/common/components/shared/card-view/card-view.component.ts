import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spi-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit{
  @Input() public data:any;
  public ngOnInit(): void {
    
  }
}
