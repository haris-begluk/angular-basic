import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//Ako komponenta ima malo koda onda mozemo koristiti template  
//ali ako komponenta sadrzi vise od 5 linija koda onda je bolje 
//koristiti templateUrl jer tako je kod pregledniji
@Component({
  selector: 'favorite',
  //templateUrl: './favorite.component.html', 
  template:`
  <span class="glyphicon rating" 
  [class.glyphicon-star]="isSelected" 
  [class.glyphicon-star-empty]="!isSelected" 
  (click)="onClick()"
  ></span> 
  `,
  styleUrls: ['./favorite.component.css'] 
})
export class FavoriteComponent implements OnInit { 
  //kreiranje Alias-a za isFavorite property 
  //na ovaj nacin sprijecavamo pucanje aplikacije u slucaju 
  //izmjene naziva propertia u favorite componenti 
 @Input('is-favorite') isSelected:boolean; 
 @Output('change') click = new EventEmitter();
  constructor() { }

  ngOnInit() {
  } 
  onClick(){
    this.isSelected = !this.isSelected; 
    this.click.emit({newValue: this.isSelected});
  }

} 
export interface FavoriteChangedEventArgs {
  newValue:boolean;
}
