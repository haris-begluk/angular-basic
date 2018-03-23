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
    //This special syntax is caled "String Interpolation"
    //template: '<h1>{{ "Title: " + title }}</h1>' 
})
//Courses Component
export class CoursesComponent{ 
    title = "List of Course";  
    courses =  ["Course One" , "Course Two", "Course Three"];
}