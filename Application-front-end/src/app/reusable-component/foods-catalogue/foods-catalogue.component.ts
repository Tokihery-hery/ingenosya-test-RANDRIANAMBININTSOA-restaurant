import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Food, Product, Ingredient, FoodsReturn } from "src/app/restaurant/interface"


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
  @Output() getDetail:EventEmitter<any> = new EventEmitter()

  constructor() { 
  }

  ngOnInit(): void {
  }
  vueDetail(items:Food){
      this.getDetail.emit(items)
  }
    addCart(id:any){
    this.getDetail.emit(id)
  }

}
