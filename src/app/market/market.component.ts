import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, RouterModule, Routes } from '@angular/router';
import { Http, Response} from '@angular/http';
import { Observable} from 'rxjs/Rx';

// Models
import { Timeline } from './../models/timeline';
import { Stock } from './../models/stock';

// Services
import { MarketService } from './market.service';
import { StockService} from './../stock/stock.service';

@Component({ selector : 'app-market',
             templateUrl: './market.component.html',
             styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  private market: string;
  private timelines: Timeline[];
  private stock: Stock;
  private dates: string[];

  /////////////////
  // Constructor //
  /////////////////
  public constructor(

    public marketService: MarketService,
    private router: Router,
    private stockService: StockService

  ) {

    this.market = 'Dax';
    this.timelines = [];

  }

  ///////////////
  // Functions //
  ///////////////

  public ngOnInit(): void {

    this.marketService.getMarket(this.market).subscribe( data => {

      let i = 0;

      for (const timeline of data) {

        const keys = Object.keys(timeline);
        this.timelines[i] = new Timeline();
        console.log(data);
        for (const key of keys){

          this.stock = new Stock();
          this.stock.setSymbol(timeline[key].symbol);
          this.stock.setName(timeline[key].name);
          this.stock.setClose(timeline[key].close);
          this.stock.setChange(Math.round(timeline[key].change * 100));
          const t = timeline[key].date.split(' ')[0].split('-');
          this.stock.setDate(new Date(+(t[0]), +(t[1]) - 1, +(t[2])));
          this.timelines[i].getStocks().push(this.stock);

        }
        i++;
      }

      this.dates = [];
      for (const stock of this.timelines[0].getStocks()) {

        this.dates.push(stock.getDate());

      }
    });
  }


  // Connection to the single stock view
  public switchToStock(stock: string) {

    this.stockService.setMarket(this.market);
    this.stockService.setStock(stock);

    this.router.navigate(['stock/']);

  }

  /////////////
  // Getters //
  /////////////
  public getMarket(): string {

    return this.market;

  }

  public getTimelines(): Timeline[] {

    return this.timelines;

  }

  /////////////
  // Setters //
  /////////////
  public setMarket(market: string): void {

    this.market = market;

  }

  public setTimelines(timelines: Timeline[]): void {

    this.timelines = timelines;

  }


}





