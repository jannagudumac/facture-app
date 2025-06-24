import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  private apiURL = 'api/products';
  constructor(private http: HttpClient) { };
  //C
  addProduct(item: Product){
    return this.http.post<Product>(this.apiURL, item)
  };
  //R 
  getProducts() {
    return this.http.get<Product[]>(this.apiURL)
  }

}
