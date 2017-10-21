import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  private title: string;
  private headers: string[];

  /////////////////
  // Constructor //
  /////////////////
  public constructor() {

    this.title = 'Portfolio';

  }

  ngOnInit() {

    this.headers = ['Stock', 'Volume', 'Buy Price', 'Buy Date', 'Current Price', 'Change'];

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

  /////////////
  // Setters //
  /////////////
  public setTitle(title: string): void {

    this.title = title;

  }

  public setHeaders(headers: string[]): void {

    this.headers = headers;

  }


}
