import { CoursesService } from './courses.services';
import {Component} from '@angular/core' 



@Component({
    selector: 'courses', 
    template: ` 
    <input (keyup)="onKeyUp($event)" />
    `  
})

export class CoursesComponent{   
    onKeyUp($event){
        if($event.keyCode === 13) 
        alert("You pressed Enter!");
    }
   
}