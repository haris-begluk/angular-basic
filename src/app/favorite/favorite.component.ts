import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html', 
  styleUrls: ['./favorite.component.css'], 
 

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
