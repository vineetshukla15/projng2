import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './my-first.component.html',
  })

export class MyFirstComponent {

constructor(){
  }

  firstName:string ='Vineet';
  lastName:string ='Shukla';

  onNotify(message:string){
    alert(message);
  }

  hidden:boolean = true;
}
