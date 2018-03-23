import { CoursesService } from './courses.services';
import {Component} from '@angular/core' 



@Component({
    selector: 'courses', 
    template: `
   {{ text | summary:10 }}
    `  
})
//Pipes 
//Built-in Uppercase Lowercase Decimal Currency Percent 
//Custom Pipe
export class CoursesComponent{    
   text = 'Ovo je neka recenica za vjezbu, pa je potrebno vjezbati.';
   
}