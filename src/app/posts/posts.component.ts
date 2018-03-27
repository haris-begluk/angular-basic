import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
}) 
//Promises and Observable koristimo da bi radili sa asynch 
//zahtjevima, da bi sprijecili blokranje aplikacije 
//prilikom ucitavanja podataka jer moze doci do kasnjenja
export class PostsComponent  { 
  //primjer kako da preuzmemo podatke sa servera (API) 
  //pretvorimo ih u json objekte te prikazemo na stranici
    posts: any[]; 
    private url = 'http://jsonplaceholder.typicode.com/posts';
    constructor(private http: Http){
        http.get(this.url) 
        .subscribe(response => {
              //console.log(response.json()); 
              this.posts = response.json();
        });
    } 


    createPost(input:HTMLInputElement){ 
      let post ={
        title: input.value
      }; 
      input.value = "";
        this.http.post(this.url,JSON.stringify(post)) 
        .subscribe(response => { 
          post['id'] = response.json().id; 
          this.posts.splice(0,0,post);
          console.log(response.json()) //da vidimo objekat u konzoli
        });
    }
}
