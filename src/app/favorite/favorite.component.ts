import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';
//View Encaptulation
@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html', 
  styleUrls: ['./favorite.component.css'], 
  encapsulation: ViewEncapsulation.Emulated //Emulated Shadow DOM primjenjuje specificne 
  //stilove zasebno Default 99% slucajeva ne zelimo mijenjati
  // encapsulation: ViewEncapsulation.Native //Shadow DOM encapsulation
  //encapsulation: ViewEncapsulation.None

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
