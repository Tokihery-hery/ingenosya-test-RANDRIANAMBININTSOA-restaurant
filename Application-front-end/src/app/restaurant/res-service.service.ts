import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { API} from 'src/environments/environment'
import { Observable, throwError } from 'rxjs';

import { Food, Product, Ingredient, FoodsReturn } from './interface'

@Injectable({
  providedIn: 'root'
})
export class ResServiceService {
  headers = new HttpHeaders();
  fileImages:any[] =[]
  constructor(private __http:HttpClient) {
    this.headers.append('Access-Control-Allow-Origin', '*'); 
    this.headers.append('Access-Control-Allow-Credentials', 'true');
  }
  getAllFoods =():Observable<any>=>{
    return this.__http.get(`${API.URL}/foods`)
  }
  getFoodsDetails(id:any):Observable<Food>{
    return this.__http.get(`${API.URL}/foods/details/${id}`)
  }
  createFood=  (obj:any):Observable<any> =>{
      return this.__http.post(`${API.URL}/foods`, obj, {headers:this.headers})
  }
  getListsProducts =():Observable<any> =>{
    return this.__http.get(`${API.URL}/product`)
  } 
  getProductByName =($name:string) =>{
    return this.__http.get(`${API.URL}/product/${$name}`)
  } 
  updateQuantityIngredient(ingredient_id:number, obj:any){
    return this.__http.put(`${API.URL}/ingredient/quantity/${ingredient_id}`, obj, {headers:this.headers})
  }
  addOtherPrice(obj:any){
    return this.__http.put(`${API.URL}/add-price`, obj, {headers:this.headers})
  }
  getPrice(foods_id:any){
    return this.__http.get(`${API.URL}/price/${foods_id}`)
  }
}
