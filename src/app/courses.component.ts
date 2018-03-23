import { CoursesService } from './courses.services';
import {Component} from '@angular/core' 



@Component({
    selector: 'courses', 
    template: ` 
    <input [value]="email" (keyup.enter)="email =$event.target.value; onKeyUp()" />
    `  
})
//Two way binding
export class CoursesComponent{    
    email="moj@email.com";
    onKeyUp(){
       // if($event.keyCode === 13) 
        alert("You pressed Enter!  " + this.email);
    }
   
}