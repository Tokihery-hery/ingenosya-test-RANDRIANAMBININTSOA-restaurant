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
  items = {'id':123, name:"Humberger", description: "Tena milay ranag ity an Tena milay ranag ity anTena milay ranag ity anTena milay ranag ity anTena milay ranag ity an", price:6780, images:"data:image/jpeg;base64,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"}
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