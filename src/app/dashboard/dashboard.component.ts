import { Component, OnInit } from '@angular/core';
import { TileItem } from '../tile-item/tile-item.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tile: TileItem = {
    Text: 'Text',
    RedirectUrl: 'https://www.brandmaster.com',
    Background: '../../assets/rectangle@2x.png'
  };

  title = 'extra text';
  subtitle = 'Get Inspired';
  smallScreen: MediaQueryList;

  tiles: TileItem[] = [this.tile, this.tile, this.tile, this.tile, this.tile, this.tile];

  constructor() {
    window.onresize = () => {
      this.declareScreenSize();
    }
  }

  ngOnInit() {
  }

  declareScreenSize(): void {
    this.smallScreen = window.matchMedia('(max-width: 600px)');
  }
}
