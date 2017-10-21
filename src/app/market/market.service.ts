// Angular Modules
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpModule, JsonpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ReplaySubject } from 'rxjs/Rx';

// Models
import { Stock } from '../models/stock';
import { Timeline } from '../models/timeline';

// Firebase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class MarketService {

  	///////////////
  	// Variables //
    ///////////////
    private market: string;
    private stock: Stock;
    private timeline: Timeline;
    public timelines: Timeline[];
    private subject = new Subject<Timeline[]>();

	/////////////////
	// Constructor //
	/////////////////
    public constructor(

        public angularFireDatabase: AngularFireDatabase

    ) {

        this.market = 'Dax';
        this.timelines = [];

    }

    ///////////////////
	// GET Functions //
    ///////////////////
    public getMarket(market: string): FirebaseListObservable<any[]> {

        return this.angularFireDatabase.list(market);

    }

    public getMarketNew(market: string): void {

        this.angularFireDatabase.list(market).subscribe( data => {

            let i = 0;

            for (const timeline of data) {

                const keys = Object.keys(timeline);
                this.timelines[i] = new Timeline();

                for (const key of keys){

                    this.stock = new Stock();
                    this.stock.setSymbol(timeline[key].symbol);
                    this.stock.setName(timeline[key].name);
                    this.stock.setClose(timeline[key].close);
                    this.stock.setChange(timeline[key].change);
                    const t = timeline[key].date.split(' ')[0].split('-');
                    this.stock.setDate(new Date(+(t[0]), +(t[1]) - 1, +(t[2])));
                    this.timelines[i].getStocks().push(this.stock);

                }
                i++;
            }

            this.subject.next(this.timelines);

        });

    }

    getTimelines(): Observable<Timeline[]> {

        return this.subject.asObservable();

    }

    public getStock(market: string, name: string): FirebaseListObservable<any[]> {

        return this.angularFireDatabase.list(market + '/' + name);

    }

	//////////////////////
	// DELETE Functions //
	//////////////////////

    public deleteMarket(market: string): void {

        this.angularFireDatabase.object(market).remove().catch( error => {

            alert(error.message);

        });

    }

    public deleteStock(market: string, stock: string): void {

        this.angularFireDatabase.object(market + '/' + stock).remove().catch( error => {

            alert(error.message);

        });
    }

    /////////////
    // Getters //
    /////////////
    // public getTimelines(): Observable<Timeline[]> {

    //     return this.timelines;

    // }

    // /////////////
    // // Setters //
    // /////////////
    // public setTimelines(timelines: Observable<Timeline[]>): void {

    //     this.timelines = timelines;

    // }



}
