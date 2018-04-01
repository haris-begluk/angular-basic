import { AppError } from './../common/app-error';
import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core'; 
import 'rxjs/add/operator/catch';//REACTIVE PROGRAMMING  
import 'rxjs/add/observable/throw';//REACTIVE PROGRAMMING
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'; //REACTIVE PROGRAMMING
import 'rxjs/add/operator/toPromise'; //REACTIVE PROGRAMMING
import 'rxjs/add/operator/retry'; //REACTIVE PROGRAMMING

@Injectable()
export class DataService {
//za provjeru error-a samo prepraviti link u ne validan
  constructor(private url:string ,private http: Http) {

   } 
   getAll(){
    return this.http.get(this.url)
    .map(response => response.json()) 
    .catch(this.handleError); 
   } 

   create(resourse){
    return this.http.post(this.url ,JSON.stringify(resourse))
    .map(response => response.json()) 
    .catch(this.handleError); 
   }
   
   update(resourse){
    return this.http.patch(this.url + '/' + resourse.id , JSON.stringify({ isRead: true})) 
    .map(response => response.json()) 
    .catch(this.handleError) ;
   } 



   delete(id){ 
  // return Observable.throw(new AppError);
   return this.http.delete(this.url + '/' + id)
   .map(response => response.json())  
   .toPromise() 
   //.retry(3) //jako mocna metoda
   .catch(this.handleError); 
   //Sve ove metode kao sto su map, retry, catch mozemo staviti u lanac 
   //medjutim one nece biti izvrsene sve dok ne pozovemo metodu subscribe. 
   //Ovo je jako mocno jer mozemo izvrsiti vise metoda od jednom. 
   //najcesce koristenen metode su catch i map 
   //Uvijek mozemo konvertovati observable to promises 
   //ali najbolje je da upotrebljavamo promises jer 
   //omogucavaju rxjs REACTIVE programiranje i mnogo operatora
   //a takodjer su lazy 
   } 

   private handleError(error: Response){ 
    if(error.status === 400){
      return Observable.throw(new BadInput(error.json()))
    }
    if(error.status === 404){
      return Observable.throw(new NotFoundError());
    }
     return Observable.throw(new AppError(error));
   }
}
