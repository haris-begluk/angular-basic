import { CoursesService } from './courses.services';
import {Component} from '@angular/core' 


//template variable
@Component({
    selector: 'courses', 
    template: ` 
    <input #email (keyup.enter)="onKeyUp(email.value)" />
    `  
})

export class CoursesComponent{   
    onKeyUp(email){
       // if($event.keyCode === 13) 
        alert("You pressed Enter!  " + email);
    }
   
}