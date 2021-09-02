import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { API} from 'src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ResServiceService {
  headers = new HttpHeaders();
  fileImages:any[] =[]
  constructor(private __http:HttpClient) { }


  getAllFoods =()=>{
    return this.__http.get(`${API.URL}/foods`)
  }

  createFood=  (obj:any) =>{
      return this.__http.post(`${API.URL}/foods`, obj)
  }
  getListsProducts =() =>{
    return this.__http.get(`${API.URL}/product`)
  } 
}
