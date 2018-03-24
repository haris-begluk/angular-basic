import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//u Angular-u imamo tri nacina za primjenu stilova(styles) nad komponentom
//Prvi nacin: styleUrls: ['./favorite.component.css']  
//Ovdje mozemo imati jedan ili vise css filova
//Drugi nacin styles:[ `background:#546654;`]  
//koristimo kada nemamo puno style coda pa ne koristimo novi external file.  
//Treci nacin jeste da koristimo syles tag direktno u html filu komponente 
//ali se to rijetko koristi 
//Dobra praksa je da se koristi samo jedan nacin 
//Ali i ukoliko koristimo vise nacina na jednoj komponenti  
//Angular ce koristiti uvijek zadnju tako da ostale ignorise
@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html', 
  styleUrls: ['./favorite.component.css'] 
 // styles:[ `background:#546654;`] 
})
export class FavoriteComponent  { 
  
 @Input('is-favorite') isSelected:boolean; 
 @Output('change') click = new EventEmitter();
 
  onClick(){
    this.isSelected = !this.isSelected; 
    this.click.emit({newValue: this.isSelected});
  }

} 
export interface FavoriteChangedEventArgs {
  newValue:boolean;
}
