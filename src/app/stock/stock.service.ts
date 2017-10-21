import { Injectable } from '@angular/core';

@Injectable()
export class StockService {

  ///////////////
  // Variables //
  ///////////////
  private market: string;
  private stock: string;

  /////////////////
  // Constructor //
  /////////////////
  constructor() { }

  /////////////
  // Getters //
  /////////////
  public getMarket(): string {

    if (!this.market) {

      this.market = '' + window.sessionStorage.getItem('market');

    }

    return this.market;

  }

  public getStock(): string {

    if (!this.stock) {

      this.stock = '' + window.sessionStorage.getItem('stock');

    }

    return this.stock;

  }

  /////////////
  // Setters //
  /////////////
  public setMarket(market: string): void {

    this.market = market;
    window.sessionStorage.setItem('market', this.market);

  }

  public setStock(stock: string): void {

    this.stock = stock;
    window.sessionStorage.setItem('stock', this.stock);

  }

}
