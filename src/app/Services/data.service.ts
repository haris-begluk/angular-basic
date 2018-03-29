import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core'; 
import 'rxjs/add/operator/catch';  
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable'
import { AppError } from '../common/app-error';

@Injectable()
export class DataService {
//za provjeru error-a samo prepraviti link u ne validan
  constructor(private url:string ,private http: Http) {

   } 
   getAll(){
    return this.http.get(this.url) 
    .catch(this.handleError); 
   } 

   create(resourse){
    return this.http.post(this.url ,JSON.stringify(resourse)) 
    .catch(this.handleError); 
   }
   
   update(resourse){
    return this.http.patch(this.url + '/' + resourse.id , JSON.stringify({ isRead: true}))
    .catch(this.handleError) ;
   } 



   delete(id){ 

   return this.http.delete(this.url + '/' + id)
   .catch(this.handleError);
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
