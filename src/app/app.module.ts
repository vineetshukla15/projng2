import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'; // To support calling http services

import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { NestedComponent } from './nested/nested.component';
import {FirstService} from './first.service'

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    NestedComponent    
  ],
  imports: [
    BrowserModule,HttpModule 
  ],
  providers: [FirstService], // Service is registered as Provider
  bootstrap: [MyFirstComponent] //This is bootstrap component, means will be main container component
})
export class AppModule { }
