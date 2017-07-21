import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { NestedComponent } from './nested/nested.component';


@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    NestedComponent    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MyFirstComponent]
})
export class AppModule { }
