
/**
 * The below statement will make this class a component, so by importing the Component 
 * member from the @angular/core library a class will become component. 
 */
import { Component } from '@angular/core';

/**
 * Below block is know as Component Decorator, all component CONFIGURATION properties are defined in this block only
 */
@Component({
  selector: 'app-root', //This is the name of the tag that the component is applied to
  templateUrl: './app.component.html', // this define the html template applied to this component
  styleUrls: ['./app.component.css'] // this define the stylesheet applied to this component
})

/**
 * Finally, below is core of component , called as component class. This is the place 
 * where various properties/fields and methods are defined. Any properties and methods defined here are accessible from the template. 
 * And likewise, events that occur in the template are accessible within the component. 
 * 
 * It's also where dependency injection occurs within a constructor, which gives you access to various services
 */
export class AppComponent {
  title = 'app';
}
