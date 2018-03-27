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
    constructor(http: Http){
        http.get('http://jsonplaceholder.typicode.com/posts') 
        .subscribe(response => {
              //console.log(response.json()); 
              this.posts = response.json();
        });
    }
}
