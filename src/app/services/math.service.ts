import { Injectable } from '@angular/core';

@Injectable()
export class MathService {

  ///////////////
  // Variables //
  ///////////////
  private data: number[];
  private size: number;

  /////////////////
  // Constructor //
  /////////////////
  public constructor() {}

  ///////////////
  // Functions //
  ///////////////
  public getMean(): number {

    let sum = 0;

    for (let i = 0; i < this.size; i++) {
      console.log(this.data[i]);
      sum = sum + this.data[i];
      console.log(sum);
    }
    const t = sum / this.size;
    return t;

  }

  public getVariance(): number {

    const mean = this.getMean();
    let temp = 0;

    for (let i = 0; i < this.size; i++) {

      temp += (this.data[i] - mean) * (this.data[i] - mean);

    }

    const t = temp / (this.size - 1);
    return t;

  }

  public getStdDev(): number {

    const t = Math.sqrt(this.getVariance());
    return t;

  }

  public median(): number {

    const temp = this.data.sort();

    if (temp.length % 2 === 0) {

      return (temp[(temp.length / 2) - 1] + temp[temp.length / 2]) / 2;

    }
    return temp[temp.length / 2];

  }

  /////////////
  // Getters //
  /////////////
  public getData(): number[] {

    return this.data;

  }

  /////////////
  // Setters //
  /////////////
  public setData(data: number[]): void {

    this.data = data;
    this.size = data.length;

  }

}
