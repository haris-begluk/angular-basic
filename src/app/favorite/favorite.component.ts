import { Component, OnInit, Input } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  } 
  onClick(){
    this.isSelected = !this.isSelected;
  }

}
