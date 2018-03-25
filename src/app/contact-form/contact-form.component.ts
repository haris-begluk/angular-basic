import { Component} from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {
  log(x){ 
    console.log(x); 
  } 

  submit(f){ 
    console.log(f);
    console.log(f.value); //sada je value ovjekt 
    //kompleksan objekt jer smo koristili ngModelGroup direktivu
    
  }
}