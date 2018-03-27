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
      this.service.getPosts()
        .subscribe(
          response => {
              //console.log(response.json()); 
              this.posts = response.json();
        },
        error =>{
          alert('Unexpected error occurred.'); 
          console.log(error);
        }); 
    }

    createPost(input:HTMLInputElement){ 
      let post ={
        title: input.value
      }; 
      input.value = "";
        this.service.createPost(post) 
        .subscribe(
          response => { 
          post['id'] = response.json().id; 
          this.posts.splice(0,0,post);
          console.log(response.json()); //da vidimo objekat u konzoli
        }, 
        (error:Response) =>{ 
          if(error.status === 400){
             // this.form.setErrors(error.json()) //Ovako bi mogli spisat error poruke u formi 
             alert('Los zahtjev desila se greska!');
          } else {
            alert('Unexpected error occurred.'); 
            console.log(error);
          }
          
        });
    } 

    updatePost(post){ 
     this.service.updatePost(post)
      .subscribe(response =>{
        console.log(response.json());
      }, error =>{
        alert('Unexpected error occurred.'); 
        console.log(error);
      });
      // this.http.put(this.url,JSON.stringify(post));
    }

    deletePost(post){
      this.service.deletePost(post.id)
      .subscribe(respnse =>{
          let index = this.posts.indexOf(post); 
          this.posts.splice(index,1);
      },(error:Response) =>{ 
        if(error.status === 404) 
        alert('This post dont exist in database!'); 
        else {
          alert('Unexpected error occurred.'); 
          console.log(error);
        }
        
      });
    }
}
