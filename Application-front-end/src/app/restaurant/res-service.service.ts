import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
 import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResServiceService {
  URL_API = "http://127.0.0.1:8000/api"

  headers = new HttpHeaders();
  fileImages:any[] =[]
  constructor(private __http:HttpClient) { }

}
