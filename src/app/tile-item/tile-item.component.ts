import { TileItem } from './tile-item.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile-item',
  templateUrl: './tile-item.component.html',
  styleUrls: ['./tile-item.component.css']
})
export class TileItemComponent implements OnInit {
 @Input() tile: TileItem;

  constructor() { }

  ngOnInit() {
  }
}
