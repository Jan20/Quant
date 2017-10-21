import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

// Models
import { Stock } from './../models/stock';
import { Timeline } from './../models/timeline';
import { Seed } from './../models/seed';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

// Services
import { SeedService } from './../services/seed.service';

@Injectable()
export class VantageService {

  ///////////////
  // Variables //
  ///////////////
  private results: any[];
  private seeds: Seed[];
  private timeline: Timeline;
  private stock: Stock;

  public constructor(

    public httpClient: HttpClient,
    public angularFireDatabase: AngularFireDatabase,
    public seedService: SeedService

  ) {

    this.seeds = this.seedService.getSeeds();

  }

  ///////////////
  // Functions //
  ///////////////
  public getMarket(market: string): void {

    for (let i = 0; i < this.seeds.length; i++) {

      this.httpClient.get('https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=' + this.seeds[i].getSymbol() +
      '&outputsize=compact&apikey=6404')
        .subscribe(data => {
          this.timeline = new Timeline();
          for (const key in data['Monthly Time Series']) {

            if (data['Monthly Time Series'].hasOwnProperty(key)) {

              this.stock = new Stock();
              this.stock.setName(this.seeds[i].getName());
              this.stock.setSymbol(data['Meta Data']['2. Symbol']);
              this.stock.setClose(data['Monthly Time Series'][key]['4. close']);
              this.stock.setDate(key);
              this.timeline.getStocks().push(this.stock);

            } else {

              alert('Market data could not been fetched');
              return;

            }

          }

          for (let j = 0; j < 12; j++) {

            const stock = this.timeline.getStocks()[j];
            stock.setChange(
              (this.timeline.getStocks()[j].getClose() -
                this.timeline.getStocks()[j + 1].getClose() ) /
                this.timeline.getStocks()[j + 1].getClose()
              );

            this.angularFireDatabase.object('Dax' + '/' + this.seeds[i].getName() + '/' + stock.getDate()).set(stock);
          }
      });
    }

  }

  private execute(seed: Seed): void {

  }

}
