import { CoursesService } from './courses.services';
//Importing Component Decorator
import {Component} from '@angular/core' 

//Component Decorator 
//<img src="{{ imageUrl }}"/>  Interpolation radi dobro za dodavanje  
//dinamickih vrijednosti izmedju headings, div, paragraf ili 
//bilo gdje zelimo rendati text  
// <h1 [textContent]="title"></h1> ovaj primjer je komplikovan
//<img [src]="title" /> Property Binding bolji za dodavanje vrijednosti 
//atributima tagova
@Component({
    selector: 'courses', 
    template: `
    <h1>{{ "Title: " + title }}</h1>  
    <h1 [textContent]="title"></h1>
    <img src="{{ imageUrl }}"/>  
    <img [src]="imageUrl" />
    ` 
    
})
//Courses Component
export class CoursesComponent{ 
    title = "List of Course";   
    imageUrl = "https://www.w3schools.com/howto/img_fjords.jpg";
}