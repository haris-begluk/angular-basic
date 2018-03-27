import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
}) 
//Separation Of Concerns  
//Ova implementacija nije najbolje konstruirana 
//ovo je samo primjer kako koristiti zahtjeve prema api serveru 
//Problem su sto imamo svu implementaciju na jednom mjestu sto otezava 
//preglednost, testiranje takodje kada bi morali prokazati posts na vise mjesta 
//ovaj kod ne bi bio praktica. Sto se tice testiranja zahtjevi prema serveru 
//otezavaju testiranje i to ne bi trebali nikada dozvoliti  
//Jer unittesting nije moguc ukoliko saljemo zahtjeve prema serveru 
//Rjesenje je upotrba Service-a koji nam omogucuju da su svi zahtjevi 
//na jednom mjesto sto je dobro u slucaju izmjene,  naravno 
//takav servis mozemo koristiti na vise mjesta sto nije slucaj sa post klasom 
//Druga prednost jeste kada testiramo mozemo kreirati lazni servis koji ne salje zahtjeve prema serveru
//i tako koristiti hiljade testova u nekoliko sekundi sto ne bi bili u mogucnosti sa ovom klasom
export class PostsComponent implements OnInit { 
    posts: any[]; 
    private url = 'http://jsonplaceholder.typicode.com/posts';


    constructor(private http: Http){
        //Najbolja praxa je da ne pozivamo 
        //http metode u konstruktoru zbog 
        //performansi
    } 
    ngOnInit(){
      this.http.get(this.url) 
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
          console.log(response.json()); //da vidimo objekat u konzoli
        });
    } 

    updatePost(post){ 
      this.http.patch(this.url + '/' + post.id , JSON.stringify({ isRead: true}))
      .subscribe(response =>{
        console.log(response.json());
      })
      // this.http.put(this.url,JSON.stringify(post));
    }

    deletePost(post){
      this.http.delete(this.url + '/' + post.id)
      .subscribe(respnse =>{
          let index = this.posts.indexOf(post); 
          this.posts.splice(index,1);
      });
    }
}
