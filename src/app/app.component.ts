import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 post = {
   title: "Title", 
   isFavorite: true 
   
 } 
 //Umjesto  onFavoriteChanged(eventArgs:{newValue:boolean}){ 
//Kreirali smo Interface
 onFavoriteChanged(eventArgs:FavoriteChangedEventArgs){
   alert("Changed " + eventArgs.newValue );
 }
}
