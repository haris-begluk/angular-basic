import { AbstractControl, ValidationErrors } from "@angular/forms";
//import { resolve } from "dns";
//import { reject } from "q";

//Ovdje cemo simulirati poziv na server  
//Pozive na server zovemo Asynchronous Operations 
//Kad zelimo provjeriti validaciju preko servera: 
//Pozivanje servera koristeci AJAX 
//Timer functions 
export class UsernameValidators{
  static cannotContainSpace(control:AbstractControl):ValidationErrors | null{
    if((control.value as string).indexOf(' ')>=0) 
    return { cannotContainSpace:true };
    // return { minlength:{ requiredLength:10 , actualLength: control.value.length } } 
    return null;
    } 

    //Asynch Validator
    static shouldBeUniq(control: AbstractControl):Promise<ValidationErrors | null> { 
       return new Promise(( resolve, reject ) => {
        setTimeout(() => { 
            console.log('ok'); 
            if(control.value === 'Mosh') 
            resolve ({ shouldBeUniq: true }); 
            else
            resolve( null );
        }, 2000);
       });
        
     }
}