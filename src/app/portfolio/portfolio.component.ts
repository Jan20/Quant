import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material';

// Models
import { Stock } from './../models/stock';
import { Position } from './position/position';

// Services
import { VantageService } from './../services/vantage.service';
import { MarketService } from './../market/market.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  private title: string;
  private headers: string[];
  private positions: Position[];

  /////////////////
  // Constructor //
  /////////////////
  public constructor() {

    this.title = 'Portfolio';

  }

  ngOnInit() {

    this.headers = ['Stock', 'Volume', 'Change'];

  }

  ///////////////
  // Functions //
  ///////////////

  /////////////
  // Getters //
  /////////////
  public getTitle(): string {

    return this.title;

  }

  public getHeaders(): string[] {

    return this.headers;

  }

  public getPositions(): Position[] {

    return this.positions;

  }

  /////////////
  // Setters //
  /////////////
  public setTitle(title: string): void {

    this.title = title;

  }

  public setHeaders(headers: string[]): void {

    this.headers = headers;

  }

  public setPositions(positions: Position[]) {

    this.positions = positions;

  }

}
