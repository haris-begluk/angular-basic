import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'] 
})
export class FavoriteComponent implements OnInit { 
  //kreiranje Alias-a za isFavorite property 
  //na ovaj nacin sprijecavamo pucanje aplikacije u slucaju 
  //izmjene naziva propertia u favorite componenti 
 @Input('is-favorite') isSelected:boolean; 
 @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  } 
  onClick(){
    this.isSelected = !this.isSelected; 
    this.change.emit({newValue: this.isSelected});
  }

} 
export interface FavoriteChangedEventArgs {
  newValue:boolean;
}
