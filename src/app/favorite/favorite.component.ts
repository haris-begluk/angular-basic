import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//Primjer Shadow DOM 
//Omogcava da stilovi komponente ne budu primjenjeni na ostale elemente 
//u Angular aplikaciji  
/* 
var el = document.querySelector('favorite'); 
var root = el.createShadowRoot(); 
el.innerHTML = `
<style>h1 {color: red }</style>
<h1>Hello</h1>
`;

*/
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
