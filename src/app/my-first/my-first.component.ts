import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.css']
})
export class MyFirstComponent {

  employee = {
    name:"Vineet",
    id:"N0212"
  };
}
