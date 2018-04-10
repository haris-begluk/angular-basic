import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/combineLatest';
@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor( 
    private route:ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {  

 /* 
 let obs =  Observable.combineLatest([
      this.route.paramMap, 
      this.route.queryParamMap
    ]);
    
*/ 
//kombinacija observables u jednu 
  Observable.combineLatest([
      this.route.paramMap, 
      this.route.queryParamMap
    ]).subscribe(combined =>{ //opisali smo observables 
       let id = combined[0].get('id'); 
       let page = combined[1].get('page'); 

       //this.service.getAll([id: id, page: page]); 
       this.service.getAll() //koristimo service da dobijemo podatke sa servera
      .subscribe(followers => this.followers = followers); 
    });
     
    
    //this.route.paramMap.subscribe( params => {

      //}); 
     // let id = this.route.snapshot.paramMap.get('id');

      //this.route.queryParamMap.subscribe(params => {

      //}); 
     // let page = this.route.snapshot.queryParamMap.get('page'); 

  }
}
