import { CoursesService } from './courses.services';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms'; //
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';


@NgModule({
  declarations: [
    AppComponent, 
    CoursesComponent, 
    CourseComponent, 
    SummaryPipe, FavoriteComponent
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
