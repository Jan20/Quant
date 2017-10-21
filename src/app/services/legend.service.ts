import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Firebase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';

@Injectable()
export class LegendService {

    stocks: FirebaseListObservable<any[]>;

    public constructor(

        public AngularFireDatabase: AngularFireDatabase

    ) {

    }


    public getLegend(index: String): FirebaseListObservable<any[]> {

        return this.AngularFireDatabase.list('legend/' + index);

    }

}
