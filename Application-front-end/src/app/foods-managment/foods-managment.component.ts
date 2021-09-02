import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, startWith,  switchMap } from 'rxjs/operators';
import {FormBuilder, FormControl, FormGroup, FormArray, Validators} from '@angular/forms';
import {ResServiceService} from "src/app/restaurant/res-service.service"
import { API} from 'src/environments/environment'
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

export interface Product {
  photo:string;
  name: string;
  quantity: string;
  price:any
  quantity_available: string;
}

interface FoodsReturn{
    created_at?: string
    foods_id?: string
    id: string
    product_neededs_id?:string
    quantity?: string
    updated_at?:string
}


@Component({
  selector: 'app-foods-managment',
  templateUrl: './foods-managment.component.html',
  styleUrls: ['./foods-managment.component.css']
})
export class FoodsManagmentComponent implements OnInit {
  default_image= API.default_image
  fileData:any
  productKey=""
  productsId =[]
  current_id_product:any
  productListfiltered: any;
  current_id_products:any[] =[]
  product_name = new FormControl([])
  image:any
  current_id_products_session:any[]= []
  foods:FormGroup
  SOURCE_PATH_IMAGE = API.SOURCE_PATH_IMAGE
  products:Product[]|any

  constructor(
    private breakpointObserver: BreakpointObserver, 
    private readonly fb: FormBuilder, 
    private res:ResServiceService,
    private route: ActivatedRoute,
    private router: Router) {
    this. getListsProducts()
    this.foods = this.fb.group({
    'description':new FormControl([]),
    'name':new FormControl([]),
    'ingredients':this.fb.array([]) 
  })
    this.productListfiltered = this.products

    }

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
        console.log(params['name']);
    });
    const id = this.route.snapshot.paramMap.get('id')!;
  }

  async getListsProducts(){
        await this.res.getListsProducts().subscribe(data=>{
        this.products = data
    })
  }


  get ingredients(){
    return this.foods.controls['ingredients'] as FormArray
  }

  private _filterProducts(value: string): Product[] {
      const filterValue = value.toLowerCase();

    return this.products.filter((product:any) => product?.name.toLowerCase().includes(filterValue));
  }

  onChangeProduct = async ($event:any)=>{
    if($event){
          this.productListfiltered = await this._filterProducts($event)
          this.productKey = $event
    }else{
      this.productListfiltered = this.products
    }
  }
  addIngredient(){
    let ingredientsForm = this.fb.group({
        "product_name": ['', Validators.required],
        "quantity":['', Validators.required],
        "product_neededs_id":[''],

      })
      this.ingredients.push(ingredientsForm)
      this.productListfiltered = this.products 
      localStorage.removeItem('index')

  }

  removeIngredient(ingredientsIndex:number){
    this.ingredients.removeAt(ingredientsIndex)
  }
  addAndSeeFoodDetails(){
    let ingredients = this.ingredients.getRawValue()
    ingredients.map((data:any, index:any)=>{
      data.product_neededs_id =this.getLatestChois(index)
    })
    // ingredients.photo = this.image?this.image:this.default_image
    let food = {
      'food':
        {
          'photo':this.image?this.image:this.default_image,
          'name':this.foods.controls['name'].value,
          'description':this.foods.controls['description'].value,
        },
      'ingredients': ingredients
    }
    this.res.createFood(food).subscribe(
      data=>this.navigateTo('price-manage', {'id':data.map((id:any)=>id.foods_id)}),
      error=>console.error(error)
    )
  }

  navigateTo(path:any, data?:any){
    console.log(data)
    this.router.navigate([`/${path}`, data]);
  }
  addAndNewFood(){
    // this.getIdProduct(1)
          console.log("acheteo ooo")
          this.getLatestChois(0)
  }

  makeSale(){
      console.log(this.productKey)
  }

  getIdProduct(index:any, id:any){
    let product = this.products.filter((product:any) => product.id === id)
    console.log(product.map((data:any)=>data.id)[0])
    this.current_id_product = product.map((data:any)=>data.id)[0]
    this.incrementAndGetIndexIfDetectChangeProduct(index, product.map((data:any)=>data.id)[0]) 
    console.log(this.current_id_products_session)
  }

  setProductNeededsid(){

  }

  incrementAndGetIndexIfDetectChangeProduct(indexing:any, current_id_products?:any){
    let index = localStorage.getItem('index')
    console.log(index)
      if(index){
        let i:number = parseInt(index)
        i = i +1
        localStorage.setItem('index',  `${i}`)
        this.current_id_products_session.push({"id":indexing, "index":i, "prod_id":current_id_products})
      }else{
        this.current_id_products_session.push({"id":indexing, "index":1, "prod_id":current_id_products})

        localStorage.setItem('index', "1")
        console.log("null izy ao")
      }
      return localStorage.getItem('index')
  }

  getLatestChois(id:any){
    let response = null
    let p = this.current_id_products_session.filter((index)=>index.id === id)
    if(p){
      let latest = p.reduce((a:any, b:any)=>{
        if(a>b){
          return a
        }else{
          return b
        }
      })
      response = latest.prod_id
    }
    return response
  }

  sendImages($event:any){
   this.image = this.SOURCE_PATH_IMAGE+$event?.src 
  }
}