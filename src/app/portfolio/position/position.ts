// Models
import { Stock } from './../../models/stock';

export class Position {

    ///////////////
    // Variables //
    ///////////////
    private stock: Stock;
    private volume: number;
    private buyPrice: number;
    private change: number;

    /////////////////
    // Constructor //
    /////////////////
    public constructor() {}

    /////////////
    // Getters //
    /////////////
    public getStock(): Stock {

        return this.stock;

    }

    public getVolume(): number {

        return this.volume;

    }

    public getBuyPrice(): number {

        return this.buyPrice;

    }

    public getChange(): number {

        return this.change;

    }

    /////////////
    // Setters //
    /////////////
    public setStock(stock: Stock): void {

        this.stock = stock;

    }

    public setVolume(volume: number): void {

        this.volume = volume;

    }

    public setBuyPrice(buyPrice: number): void {

        this.buyPrice = buyPrice;

    }

    public setChange(change: number): void {

        this.change = change;

    }


}