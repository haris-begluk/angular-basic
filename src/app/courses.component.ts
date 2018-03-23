import { CoursesService } from './courses.services';
//Importing Component Decorator
import {Component} from '@angular/core' 

//Component Decorator
@Component({
    selector: 'courses', 
    template: `<h1>{{ "Title: " + getTitle() }}</h1> 
     
        <ul>
        <li *ngFor="let course of courses"> 
        {{ course }}
        </li>
        </ul>

    ` 
    
})
//Courses Component
export class CoursesComponent{ 
    title = "List of Course";   
    courses; 

    constructor(service:CoursesService){ //Olaksava Unit Testing
        //Problem sa ovom implementacijom  
        //ako koristimo new operator tada smo usko vezani za CourseService 
        //drugi problem je ako zelimo dodati novi parametar u course konstruktor 
        //tada moramo dodati novi atribut npr.  let service = new CoursesService(1); 
        //let service = new CoursesService(); Losa praksa
        this.courses = service.getCourses();
    }
   

}