import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/toPromise';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import { MarketService } from '../market/market.service';
import { VantageService } from './../services/vantage.service';


@Component({ selector : 'app-settings',
             templateUrl: './settings.component.html',
             styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  private notificationTitle: String;
  private notificationBody: String;
  private visible: boolean;
  private market: string;

  //////////////////
  // Constructors //
  //////////////////
  constructor(

    private vantageService: VantageService,
    private marketService: MarketService

  ) {

    this.visible = false;
    this.market = 'Dax';

  }


  ///////////////
  // Functions //
  ///////////////
  ngOnInit(): void {}

  public deleteMarket(): void {

    this.marketService.deleteMarket(this.market);

    this.notificationTitle = 'Dax erased';
    this.notificationBody = 'Dax related data have been erased.';
    this.visible = true;

  }

  public fetchMarket(): void {

    this.vantageService.getMarket(this.market);

    this.notificationTitle = 'Dax fetched';
    this.notificationBody = 'Dax values have been fetched.';
    this.visible = true;

  }

  public dismiss(): void {

    this.notificationTitle = '';
    this.notificationBody = '';
    this.visible = false;

  }

  /////////////
  // Getters //
  /////////////
  public getMarket(): string {

    return this.market;

  }

  /////////////
  // Setters //
  /////////////
  public setMarket(market: string): void {

    this.market = market;

  }
}
