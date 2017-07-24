import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http'
import { Observable } from 'rxjs/Rx';
@Injectable()
export class FirstService {

  constructor(private http:Http) { 
  }

  getXchangeRates():Observable<string>{
      return this.http.get("http://api.fixer.io/latest") //This is how a rest call is made
         .map(response=>response = response.json()) //the json object will be converted into type TODO 'any'
         
   }

}

/**
 * A service need to be registred once is created 
 */