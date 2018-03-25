import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 courses;

 loadCourses(){
  this.courses = [ 
    { id:1 , name:'course1'}, 
    { id:2 , name:'course2'}, 
    { id:3 , name:'course3'}
  
  ]; 
 } 
//Na ovaj nacin mijenjamo kako ce Angular pratit objekte 
//Umjesto da ih prati na osnovu identiteta objekta 
//sada ce ih pratiti na osnovi id-a objekta
    trackCourse(index, course){
      return course ? course.id : undefined;
    }
 }
