import { Component,OnInit, Input,Output,EventEmitter } from '@angular/core';
import {FirstService} from '../first.service';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.css']
})

export class NestedComponent  {
  @Input() hidden:boolean;
  currencies_EUR;
  currencies_USD;
  
  constructor(private firstService:FirstService) { 
     firstService.getXchangeRatesEUR().subscribe(val => this.currencies_EUR = val);
  }

  ngOnInit() { 
     this.firstService.getXchangeRatesUSD().forEach(val => this.currencies_USD = val);
  }
  

  @Input() nestedName:string ;
  @Input() anotherName:string ;

  @Output() informParent : EventEmitter<string>  = new EventEmitter<string>();

  onClick(){
    this.informParent.emit('Tavant Technologies');
  }

  

}
