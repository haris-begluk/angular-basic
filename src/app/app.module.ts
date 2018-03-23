import { CoursesService } from './courses.services';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms'; //
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';


@NgModule({
  declarations: [
    AppComponent, 
    CoursesComponent, CourseComponent
  ],
  imports: [
    BrowserModule,  
    FormsModule
  ],
  providers: [ 
    CoursesService //Registracija providera (Dependecy Injection)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
