import { CoursesService } from './courses.services';
import {Component} from '@angular/core' 



@Component({
    selector: 'courses', 
    template: `
    {{course.title | uppercase | lowercase}} <br/> 
    {{course.students | number }} <br/>
    {{course.rating | number:'1.2-2'  }} <br/>
    {{course.price | currency:'NOK':true:'3.2-2'}} <br/>
    {{course.releaseDate | date:'shortDate'}} <br/>
    `  
})
//Pipes 
//Built-in Uppercase Lowercase Decimal Currency Percent
export class CoursesComponent{    
   course = {
       title:"The Complete Angular Course", 
       rating:4.9745, 
       students:30123, 
       price:190.54, 
       releaseDate: new Date(2018,3,1)
   }
   
}