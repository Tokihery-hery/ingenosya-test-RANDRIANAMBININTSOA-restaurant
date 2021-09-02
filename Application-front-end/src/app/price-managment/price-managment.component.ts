import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
@Component({
  selector: 'app-price-managment',
  templateUrl: './price-managment.component.html',
  styleUrls: ['./price-managment.component.css']
})
export class PriceManagmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.hasCurrentFoodsEdit = true
    }, 3000)
  }

  @ViewChild(MatAccordion) accordion: MatAccordion|any;
  hasCurrentFoodsEdit:boolean = false
  current_foods = {
    'id':123, name:"Humberger", 
  'description': "Tena milay ranag ity an Tena milay ranag ity anTena milay ranag ity anTena milay ranag ity anTena milay ranag ity an", 
  'price':6780, 
  'images':"/assets/humbergeur.jfif"
  }
  foods = [
  {
    'id':123, name:"Humberger", 
  'description': "Tena milay ranag ity an Tena milay ranag ity anTena milay ranag ity anTena milay ranag ity anTena milay ranag ity an", 
  'price':6780, 
  'images':"/assets/humbergeur.jfif"}, 
  {
    'id':123, 
    'name':"Humberger", 'description': "Tena milay ranag ity an Tena milay ranag ity anTena milay ranag ity anTena milay ranag ity anTena milay ranag ity an", 
    'price':6780, 
    'images':"/assets/humbergeur.jfif"
  },
  {
    'id':123, 
    'name':"Humberger", 'description': "Tena milay ranag ity an Tena milay ranag ity anTena milay ranag ity anTena milay ranag ity anTena milay ranag ity an", 
    'price':6780, 
    'images':"/assets/humbergeur.jfif"
  },
  {
    'id':123, 
    'name':"Humberger", 'description': "Tena milay ranag ity an Tena milay ranag ity anTena milay ranag ity anTena milay ranag ity anTena milay ranag ity an", 
    'price':6780, 
    'images':"/assets/humbergeur.jfif"
  },
  {
    'id':123, 
    'name':"Humberger", 'description': "Tena milay ranag ity an Tena milay ranag ity anTena milay ranag ity anTena milay ranag ity anTena milay ranag ity an", 
    'price':6780, 
    'images':"/assets/humbergeur.jfif"
  },
  {
    'id':123, name:"Humberger", 
  'description': "Tena milay ranag ity an Tena milay ranag ity anTena milay ranag ity anTena milay ranag ity anTena milay ranag ity an", 
  'price':6780, 
  'images':"/assets/humbergeur.jfif"}, 
  {
    'id':123, 
    'name':"Humberger", 'description': "Tena milay ranag ity an Tena milay ranag ity anTena milay ranag ity anTena milay ranag ity anTena milay ranag ity an", 
    'price':6780, 
    'images':"/assets/humbergeur.jfif"
  },
  {
    'id':123, 
    'name':"Humberger", 'description': "Tena milay ranag ity an Tena milay ranag ity anTena milay ranag ity anTena milay ranag ity anTena milay ranag ity an", 
    'price':6780, 
    'images':"/assets/humbergeur.jfif"
  },
  {
    'id':123, 
    'name':"Humberger", 'description': "Tena milay ranag ity an Tena milay ranag ity anTena milay ranag ity anTena milay ranag ity anTena milay ranag ity an", 
    'price':6780, 
    'images':"/assets/humbergeur.jfif"
  },
  {
    'id':123, 
    'name':"Humberger", 'description': "Tena milay ranag ity an Tena milay ranag ity anTena milay ranag ity anTena milay ranag ity anTena milay ranag ity an", 
    'price':6780, 
    'images':"/assets/humbergeur.jfif"
  }]

  search($event:any){
    console.log($event)
  }
  active(){
    console.log("ok")
  }
}
