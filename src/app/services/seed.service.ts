import { Injectable } from '@angular/core';

// Models
import { Seed } from './../models/Seed';

@Injectable()
export class SeedService {

  ////////////////
  // Attributes //
  ////////////////
  private seeds: Seed[];

  /////////////////
  // Constructor //
  /////////////////
  constructor() {
    this.seeds = [];
    this.seeds[0] = new Seed('ETR:ADS', 'Adidas');
    this.seeds[1] = new Seed('ETR:ALV', 'Allianz');
    this.seeds[2] = new Seed('ETR:BAS', 'BASF');
    this.seeds[3] = new Seed('ETR:BAYN', 'Bayer');
    this.seeds[4] = new Seed('ETR:BEI', 'Beiersdorf');
    this.seeds[5] = new Seed('ETR:BMW', 'BMW');
    this.seeds[6] = new Seed('ETR:CBK', 'Commerzbank');
    this.seeds[7] = new Seed('ETR:CON', 'Continental');
    this.seeds[8] = new Seed('ETR:DAI', 'Daimler');
    this.seeds[9] = new Seed('ETR:DBK', 'Deutsche Bank');
    this.seeds[10] = new Seed('ETR:DB1', 'Deutsche Börse');
    this.seeds[11] = new Seed('ETR:LHA', 'Deutsche Lufthansa');
    this.seeds[12] = new Seed('ETR:DPW', 'Deutsche Post');
    this.seeds[13] = new Seed('ETR:DTE', 'Deutsche Telekom');
    this.seeds[14] = new Seed('ETR:EOAN', 'E ON');
    this.seeds[15] = new Seed('ETR:FRE', 'Fresenius');
    this.seeds[16] = new Seed('ETR:FME', 'Fresenius Medical Care');
    this.seeds[17] = new Seed('ETR:HEI', 'HeidelbergCement');
    this.seeds[18] = new Seed('ETR:HEN3', 'Henkel');
    this.seeds[19] = new Seed('ETR:IFX', 'Infineon Technologies');
    this.seeds[20] = new Seed('ETR:LIN', 'Linde');
    this.seeds[21] = new Seed('ETR:MRK', 'Merck');
    this.seeds[22] = new Seed('ETR:MUV2', 'Munich Re');
    this.seeds[23] = new Seed('ETR:PSM', 'ProSiebenSat 1 Media');
    this.seeds[24] = new Seed('ETR:RWE', 'RWE');
    this.seeds[25] = new Seed('ETR:SAP', 'SAP');
    this.seeds[26] = new Seed('ETR:SIE', 'Siemens');
    this.seeds[27] = new Seed('ETR:TKA', 'ThyssenKrupp');
    this.seeds[28] = new Seed('ETR:VOW3', 'Volkswagen Group');
    this.seeds[29] = new Seed('ETR:VNA', 'Vonovia');

  }

  /////////////
  // Getters //
  /////////////
  public getSeeds(): Seed[] {

    return this.seeds;

  }

  /////////////
  // Setters //
  /////////////
  public setSeeds(seeds: Seed[]): void {

    this.seeds = seeds;

  }

}
