import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core'; 

@Injectable()
export class PostService extends DataService{
  //private url = 'http://jsonplaceholder.typicode.com/posts'; 

  constructor(http: Http) {
      super('http://jsonplaceholder.typicode.com/posts', http); //calling constructor of base class "data.service.ts"
   } 
}
