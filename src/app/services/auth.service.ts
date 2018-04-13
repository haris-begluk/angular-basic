import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 
import 'rxjs/add/operator/map';

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
    return false;
  }
}

