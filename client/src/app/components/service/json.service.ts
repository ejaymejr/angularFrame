import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JsonService {
    constructor (_http: Http) {
        console.log ('Json Service is Ready.');
    }
    
}
