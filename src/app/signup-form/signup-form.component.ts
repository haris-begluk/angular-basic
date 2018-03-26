import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent { 
  form = new FormGroup({  
    username: new FormControl('',[ 
      Validators.required, 
      Validators.minLength(4), 
      UsernameValidators.cannotContainSpace
    ] ,
    UsernameValidators.shouldBeUniq 
  ),
    password: new FormControl('',Validators.required)
  }); 
   login(){
    
      this.form.setErrors({
        invalidLogin:true
      }); //Setting errors on form level 
     // this.username.setErrors; //setting errors on input level
    
    }
  get username (){
    return this.form.get('username');
  }
}
