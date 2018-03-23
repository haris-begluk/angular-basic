import { CoursesService } from './courses.services';
//Importing Component Decorator
import {Component} from '@angular/core' 

//Component Decorator  
//Style Binding 
//<button [style.backgroundColor]="isActive ? 'blue' : 'red' " >Save</button>
@Component({
    selector: 'courses', 
    template: `
    <button [style.backgroundColor]="isActive ? 'blue' : 'red' " >Save</button>
    ` 
    
})
//Courses Component
export class CoursesComponent{ 
   //isActive = false; //red  
   isActive = true; //blue  
  
}