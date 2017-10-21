import { Component, OnInit } from '@angular/core';

// Models
import { Stock } from './../models/stock';
import { Timeline } from './../models/timeline';
import { Score } from './../models/score';

// Services
import { MarketService } from './../market/market.service';
import { MathService } from './../services/math.service';

// Pipes
import { PercentPipe } from '@angular/common';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.scss']
})
export class StrategyComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  private title: string;
  private headers: string[];
  private stocks: Stock[];
  private timelines: Timeline[];
  private scores: Score[];


  /////////////////
  // Constructor //
  /////////////////
  constructor(

    public marketService: MarketService,
    public mathService: MathService

  ) {

    this.title = 'Strategy';
    this.timelines = [];
    this.scores = [];

  }

  ngOnInit() {
    this.headers = ['Stock', 'Change', 'Volatility', 'Sharpe Ratio'];
    this.marketService.getMarketNew('Dax');
    this.marketService.getTimelines().subscribe( timelines => {
      this.timelines = timelines;
      this.core();
    });

  }

  ///////////////
  // Functions //
  ///////////////
  public core() {

    for (let i = 0; i < this.timelines.length; i++) {

      const score = new Score();
      const mathServiceData: number[] = [];

      for (const stock of this.timelines[i].getStocks()) {

        score.setValue(score.getValue() + stock.getChange());
        score.setName(stock.getName());
        mathServiceData.push(stock.getChange());

      }

      this.mathService.setData(mathServiceData);
      score.setVolatility(this.mathService.getStdDev());
      score.setSharpeRatio((score.getValue()) / score.getVolatility());

      this.scores[i] = score;

    }

    this.scores = this.sortScores(this.scores);

  }

  private sortScores(scores: Score[]): Score[] {

    const result = scores.sort((n1, n2) => {

      if (n1.getSharpeRatio() < n2.getSharpeRatio()) {
        return 1;
    }

    if (n1.getSharpeRatio() > n2.getSharpeRatio()) {
        return -1;
    }

    return 0;

    });

    return result;

  }


  /////////////
  // Getters //
  /////////////
  public getTimelines(): Timeline[] {

    return this.timelines;

  }

  public getScores(): Score[] {

    return this.scores;

  }

  /////////////
  // Setters //
  /////////////
  public setTimelines(timelines: Timeline[]): void {

    this.timelines = timelines;

  }

  public setScores(scores: Score[]): void {

    this.scores = scores;

  }

}
