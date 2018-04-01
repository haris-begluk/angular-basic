import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Component, OnInit } from '@angular/core';

import { PostService } from '../Services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
}) 
//Separation Of Concerns  

export class PostsComponent implements OnInit { 
    posts: any[]; 
   


    constructor(private service: PostService){
        
    } 
    ngOnInit(){
      this.service.getAll()
        .subscribe(
          posts => this.posts = posts
      ); 
    }
   //Optimistic vs Pessimistic Updates
    createPost(input:HTMLInputElement){ 
      let post ={ title: input.value };  
      this.posts.splice(0,0,post); //Pessimistic Update
      input.value = "";
        this.service.create(post) 
        .subscribe(
          newPost => { 
          post['id'] = newPost.id; 
        }, 
        (error:AppError) =>{  
          this.posts.splice(0,1);
          
          if(error instanceof BadInput){
            console.log(error.originalError);
          } else {
           throw error;
          }
          
        });
    } 

    updatePost(post){ 
     this.service.update(post)
      .subscribe(updatedPost =>{
        console.log(updatedPost.json());
      });
      // this.http.put(this.url,JSON.stringify(post));
    }

    deletePost(post){ 
      //this.service.delete(post.id).subscribe(); 
      //observable su lazy i nista se ne dogadja dok ne pozovemo 
      //subscribe metodu tj. u ovom slucaju ne brise se zapis   
      //Promises su eager odmah djeluju  
      this.service.delete(post.id);

    }
}
