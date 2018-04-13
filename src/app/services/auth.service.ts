import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 
import 'rxjs/add/operator/map';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  login(credentials) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials)) 
      .map( response => {
          let result = response.json(); 
          if(result && result.token){
            localStorage.setItem('token', result.token); 
            return true; 
          } 
          return false;
      });
  }

  logout() {  
    //Kada zelimo da odlogujemo korisnika potrebno je samo izbrisati token 
    //iz lokalnog spremnika browsera i na taj nacin korisnik prestaje biti 
    //authentifikovan. Jer ne postoji token. 
    localStorage.removeItem('token');
  }

  isLoggedIn() {  
    //Da bi provjerili jwt da li postoji u spremniki i da li je validan 
    //moramo koristiti biblioteku koju instaliramo na slijedeci nacin 
    // npm install angular2-jwt --save 
     return tokenNotExpired(); 
    /* Umjesto ovog koda: 
    let jwtHelper = new JwtHelper();  
    let token = localStorage.getItem('token'); 
    if(!token) 
    return false;
    let exparationDate = jwtHelper.getTokenExpirationDate(token); 
    let isExpired= jwtHelper.isTokenExpired(token);
    //Za provjeru 
    //console.log("Expiration: " + exparationDate); 
    //console.log("IsExpired: " + isExpired);
    return !isExpired; 
    //Koristimo return tokenNotExpired();
    */
    
  } 

  get currentUser(){ 
    //Da bi testirali ovo potrebno je da kreiramo jwt novi objekt 
    //i postavimo property "admin":"false" zatim insertujemo u 
    //fakeBackend
    let token = localStorage.getItem('token'); 
    if(!token) return null; 

    return new JwtHelper().decodeToken(token); 
  }
}

