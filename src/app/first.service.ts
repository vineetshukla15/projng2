import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http'
import 'rxjs/Rx';
@Injectable()
export class FirstService {

  public http:Http;
  constructor(http:Http) { 
    this.http= http;
  }

  url:string="http://api.fixer.io/latest";
  userurl:string="https://jsonplaceholder.typicode.com/users";

  getXchangeRatesEUR(){
      return this.http.get(this.userurl) //This is how a rest call is made
         .map(response=>response = response.json()) 
         
   }

   getXchangeRatesUSD(){
      return this.http.get("http://api.fixer.io/latest?base=USD") //This is how a rest call is made
         .map(response=>response = response.json()) 
         
   }

}

/**
 * A service need to be registred once is created 
 */