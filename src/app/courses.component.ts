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
//<td [colspan]="colSpan" ></td> td tag nema property u DOM modelu colspan 
//zato cmo dobiti gresku u konzoli, ali ako zelimo dodati atribut (novi)
//tada koristimo angular sintaksu : 
//<td [attr.colspan]="colSpan" ></td>
@Component({
    selector: 'courses', 
    template: `
    <button class="btn btn-primary" [class.active]="isActive" >Save</button>
    ` 
    
})
//Courses Component
export class CoursesComponent{ 
   isActive = true; 
   //isActive = false; klasa active za button ce nestati
}