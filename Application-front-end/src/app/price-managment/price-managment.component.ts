import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map, shareReplay, startWith,  switchMap } from 'rxjs/operators';
import {ResServiceService} from "src/app/restaurant/res-service.service"
import { Food, Product, Ingredient, FoodsReturn } from "src/app/restaurant/interface"
import { API} from 'src/environments/environment'
import {FormBuilder, FormControl, FormGroup, FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'app-price-managment',
  templateUrl: './price-managment.component.html',
  styleUrls: ['./price-managment.component.css']
})
export class PriceManagmentComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion|any;
  inputPromCurrent = "0-1"
  increment =0
  hasCurrentFoodsEdit:boolean = false
  current_foods:Food|any   
  foods:Food[]|any
  priceForm:FormGroup
  default_image = API.default_image 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private res:ResServiceService,
    private fb:FormBuilder) {
    this.priceForm = this.fb.group({
      "price_variante": this.fb.array([]) ,
      })
    }

  ngOnInit(): void {
    this.foods = this.res.getAllFoods().subscribe(data=>{
        this.foods = data?.data
        console.log(this.foods)
      })
    const id = this.route.snapshot.paramMap.get('id')!
    this.res.getFoodsDetails(id).subscribe(data=>{
      this.current_foods = data
    })

  }
  search($event:any){
    console.log($event)
  }
  active(){
    console.log("ok")
  }
  getDetail($event:Food){
    this.current_foods = $event 
    console.log($event)
  }
  addQuantity(ingredient_id:number){
    let newQuantity =0
    this.current_foods.ingredients.map((ingredient:any)=>{
      if(ingredient.id === ingredient_id){
        ingredient.quantity +=1
        newQuantity = ingredient.quantity
      }
    })
    this.res.updateQuantityIngredient(ingredient_id, {'newQuantity':newQuantity}).subscribe((data)=>{
      console.log(data)
    })
  }
  removeQuantity(ingredient_id:number){
    let newQuantity =0

    this.current_foods.ingredients.map((ingredient:any)=>{
      if(ingredient.id === ingredient_id){
        ingredient.quantity -=1
        newQuantity = ingredient.quantity

      }
    })
    this.res.updateQuantityIngredient(ingredient_id, {'newQuantity':newQuantity}).subscribe((data)=>{
      console.log(data)
    })

  }
  get price_variante(){
    return this.priceForm.controls['price_variante'] as FormArray
  }
  updatedPrice(){

  }
  canceled(){

  }
  addOtherPrice(){
    this.increment+=(parseInt(this.inputPromCurrent?.split('-')[1])*1) + 9
    let promo =this.inputPromCurrent?.split('-')[1] +'-'+this.increment
    const othersFormPrice = this.fb.group({
      "price":['', Validators.required],
      "promotion":[promo, Validators.required],
      })
    this.inputPromCurrent = promo

    this.price_variante.push(othersFormPrice)
    console.log(this.inputPromCurrent)
  }
  onChangeProduct($event:any){
        this.inputPromCurrent = $event
  }
  addOther(variante:any){
    console.log(variante)

  }
  remove(ingredientsIndex:number){
    this.price_variante.removeAt(ingredientsIndex)
  }
}
