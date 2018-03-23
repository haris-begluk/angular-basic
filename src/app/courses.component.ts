import { CoursesService } from './courses.services';
//Importing Component Decorator
import {Component} from '@angular/core' 

//Component Decorator  
//Event Binding 
//<button (click)="onSave()" " >Save</button>
@Component({
    selector: 'courses', 
    template: `
    <button (click)="onSave()">Save</button>
    ` 
    
})
//Courses Component
export class CoursesComponent{ 
   onSave(){
       alert("Welcome to Angular App");
   }
}