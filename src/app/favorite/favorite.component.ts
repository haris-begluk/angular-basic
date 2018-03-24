import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],  
  //Binding property
  inputs:['isFavorite'] //drugi nacin za binding properties 
  //Ali prblem sa ovim nacinom je magicni string
})
export class FavoriteComponent implements OnInit {
  isFavorite:boolean;
  constructor() { }

  ngOnInit() {
  } 
  onClick(){
    this.isFavorite = !this.isFavorite;
  }

}
