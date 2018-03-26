import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
}) 
/* form = new FormGroup({ 
  name: new FormControl('',Validators.required),
   contact:new FormGroup({
      email:new FormControl(), 
      phone: new FormControl()
   }),
   topics: new FormArray([]) 
  }); 

*/
export class NewCourseFormComponent  {

  form;

constructor(fb: FormBuilder){
 this.form = fb.group({
    name:['', Validators.required], 
    contact:fb.group({
      email:[], 
      phone:[]
    }), 
    topics:fb.array([])
  });
}
}
