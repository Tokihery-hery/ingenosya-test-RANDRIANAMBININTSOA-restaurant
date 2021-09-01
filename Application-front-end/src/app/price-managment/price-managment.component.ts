import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-managment',
  templateUrl: './price-managment.component.html',
  styleUrls: ['./price-managment.component.css']
})
export class PriceManagmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
  }]
}
