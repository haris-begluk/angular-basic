import { CoursesService } from './courses.services';
import {Component} from '@angular/core' 



@Component({
    selector: 'courses', 
    template: `
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    `  
})
//Two way binding Special syntax in Angular 
//<input [value]="email" (keyup.enter)="email =$event.target.value; onKeyUp()" /> 
//<input [(ngModel)]="email" (keyup.enter)="onKeyUp()" /> //Banana  in the box syntax
export class CoursesComponent{    
    email="moj@email.com";
    onKeyUp(){
       // if($event.keyCode === 13) 
        alert("You pressed Enter!  " + this.email);
    }
   
}