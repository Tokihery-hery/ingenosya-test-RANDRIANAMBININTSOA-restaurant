import { Component, OnInit, Input } from '@angular/core';

export interface Items{
  id:any;
  name:string;
  description?:string;
  price:number;
  images:string;
}
@Component({
  selector: 'app-foods-catalogue',
  templateUrl: './foods-catalogue.component.html',
  styleUrls: ['./foods-catalogue.component.css']
})
export class FoodsCatalogueComponent implements OnInit {

  @Input() items:Items|any
  constructor() { 
  }

  ngOnInit(): void {
  }


  addCart(id:any){
    console.log(id)
  }

}
