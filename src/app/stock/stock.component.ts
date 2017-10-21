import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/toPromise';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Models
import { Stock } from './../models/stock';

// Services
import { MarketService } from './../market/market.service';
import { StockService } from './stock.service';
import {GoogleChart} from './../directives/angular2-google-chart.directive';

// Firebase Authentification

@Component({ selector : 'app-stock',
             templateUrl: './stock.component.html',
             styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  private stock: Stock;
  private stockName: string;
  private stocks: Stock[];
  private closes: number[];
  private sub: any;
  private market: string;
  private line_ChartData: any;
  private line_ChartOptions: any;
  private isActive: boolean;

  //////////////////
  // Constructors //
  //////////////////
  constructor(

    private marketService: MarketService,
    private stockService: StockService,
    private route: ActivatedRoute

  ) {

    this.stocks = [];
    this.closes = [];
    this.isActive = false;
    this.line_ChartData = [];
    this.market = this.stockService.getMarket();
    this.stockName = this.stockService.getStock();
  }

  /////////////
  // Methods //
  /////////////
  ngOnInit(): void {

    this.marketService.getStock(this.market, this.stockName).subscribe( data => {

      for (const stock of data) {

        const t = stock.date;
        const d = t.split('-');

        this.stock = new Stock();
        this.stock.setSymbol(stock.symbol);
        this.stock.setName(stock.name);
        this.stock.setClose(stock.close);
        this.stock.setChange(stock.change);
        this.stock.setDate(new Date(+(d[0]), +(d[1]) - 1, +(d[2])));
        this.stocks.push(this.stock);

      }

    this.createGraph();

    });

  }

  private createGraph(): void {

    // ToDo: Change Colors
    this.line_ChartOptions = {
      title: 'Company Performance',
      curveType: 'function',
      legend: { position: 'bottom' },
      colors: ['red', 'blue', 'red', 'green', 'yellow', 'gray']
    };

    this.line_ChartData = [];
    this.line_ChartData.push(['Year', this.stocks[0].getName()]);

    for (let i = 0; i < this.stocks.length; i++) {

      this.line_ChartData.push(

        [this.stocks[i].getDate(), Number(this.stocks[i].getClose())]

      );

    }
    this.isActive = true;

  }


}



