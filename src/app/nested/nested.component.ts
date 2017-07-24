import { Component, Input,Output,EventEmitter } from '@angular/core';
import {FirstService} from '../first.service';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.css']
})
export class NestedComponent  {
  @Input() hidden:boolean;
  currencies;
  
  constructor(private firstService:FirstService) { 
    this.currencies= firstService.getXchangeRates();
  }

  @Input() nestedName:string ;
  @Input() anotherName:string ;


  @Output() informParent : EventEmitter<string>  = new EventEmitter<string>();

  onClick(){
    this.informParent.emit('Tavant Technologies');
  }

}
