import { AbstractControl, ValidationErrors } from "@angular/forms";

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

    static shouldBeUniq(control: AbstractControl): ValidationErrors | null { 
        //Timer function koja ce ispisati u konzoli 
        //nakon 2000 ms, takodjer primjer anonymous function
        setTimeout(() => { //Nece raditi kao sto bi trebalo 
            console.log('ok'); 
            if(control.value === 'Mosh') 
        return { shouldBeUniq: true };
        return null;
        }, 2000); 

        return null;//ovo nije dobro jer ce uvijek vratiti null sto znaci da 
        //nasa funkcija nece prijaviti gresku
    }
}