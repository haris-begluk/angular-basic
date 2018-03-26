import { SignupFormComponent } from './signup-form/signup-form.component';
import { CoursesService } from './courses.services';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';


@NgModule({
  declarations: [
    AppComponent, 
    CoursesComponent, 
    CourseComponent, 
    SummaryPipe,
    FavoriteComponent,
    BootstrapPanelComponent, 
    InputFormatDirective, 
    ContactFormComponent, 
    SignupFormComponent
  ],
  imports: [
    BrowserModule,  
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [ 
    CoursesService //Registracija providera (Dependecy Injection)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
