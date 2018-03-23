import { CoursesService } from './courses.services';
//Importing Component Decorator
import {Component} from '@angular/core' 

//Component Decorator  
//Event Binding 
//<button (click)="onSave()" " >Save</button> 
//Da bi bili u mogucnosti da manipulisemo sa event opcijama 
//mozemo dodati $event property 
@Component({
    selector: 'courses', 
    template: ` 
    <div (click)="onDivClicked()">
    <button (click)="onSave($event)">Save</button> 
    </div>
    `  
})
//Courses Component
export class CoursesComponent{   
    //Primjer event bubble problema
    onDivClicked($event){ 
        alert("Div was clicked:  " + $event);
    }
   onSave($event){ 
       $event.stopPropagation();//sprijecava event bubbling 
       alert("Button was clicked:  " + $event);
   }
}