import { Stock } from './stock';

export class Timeline {

    ////////////////
    // Attributes //
    ////////////////
    private stocks: Stock[];

    /////////////////
    // Constructor //
    /////////////////
    public constructor() {

        this.stocks = [];

    }

    /////////////
    // Getters //
    /////////////
    public getStocks(): Stock[] {

        return this.stocks;

    }

    /////////////
    // Setters //
    /////////////
    public setStocks(stocks: Stock[]): void {

        this.stocks = stocks;

    }

}
