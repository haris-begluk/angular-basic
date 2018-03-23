import { CoursesService } from './courses.services';
import {Component} from '@angular/core' 



@Component({
    selector: 'courses', 
    template: ` 
    <input (keyup.enter)="onKeyUp($event)" />
    `  
})

export class CoursesComponent{   
    onKeyUp($event){
       // if($event.keyCode === 13) 
        alert("You pressed Enter!");
    }
   
}