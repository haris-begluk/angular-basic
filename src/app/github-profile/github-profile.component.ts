import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() { 
   // console.log("Ovo je poziv ngOnInit funkcije!"); 
   //a ovom funkcijom smo provjeravali kako se pozivaju nove stranice 
   //Prilikom navigacije angular unisti stari page nakon toga kreira novi i inicijalizira ga 
   //Ovaj nacin pristupa parametrima koristimo kada zelimo da 
   //korisnik ostane na istoj stranici ali da se navigira naprijed i nazad kroz npr. korisnike ili slicno 
   //npr. kada otvorimo bankovni racun i navigiramo se kroz transakcije  
   //Ako zelimo da korisnik moze da ode negdje drugo sa jedne stranice i vrati se ponovo a da se stvari ne 
   //mijenjaju mozemo koristiti snapshot 


   // let id = this.route.snapshot.paramMap.get('id'); 
    //console.log(id); 

   this.route.paramMap.subscribe(params =>{
     console.log(params.get('id'));
   });
    }
  }


