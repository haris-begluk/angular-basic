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

    createPost(input:HTMLInputElement){ 
      let post ={
        title: input.value
      }; 
      input.value = "";
        this.service.create(post) 
        .subscribe(
          newPost => { 
          post['id'] = newPost.id; 
          this.posts.splice(0,0,post);
          
        }, 
        (error:AppError) =>{ 
          if(error instanceof BadInput){
             // this.form.setErrors(error.json()) //Ovako bi mogli spisat error poruke u formi 
            // this.form.setErrors(error.originalError); 
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
      this.service.delete(post.id)
      .subscribe(() =>{
          let index = this.posts.indexOf(post); 
          this.posts.splice(index,1);
      },(error:AppError) =>{ 
        if(error instanceof NotFoundError ) 
        alert('This post dont exist in database!'); 
        else {
         throw error;
        }
        
      });
    }
}
