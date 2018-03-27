import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
}) 

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
