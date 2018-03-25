import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task = {
    title: 'Review applications',  
    assignee: null //izaziva error na stranici
   // assignee:{
     // name:'John Smith'
    //}
  }
 }
