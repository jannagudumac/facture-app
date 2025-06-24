import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DbService implements InMemoryDbService{

  constructor() { }
  createDb() {
    const products: Product[] = [
      { id: 1, name: "Laptop", quantity: 1, price: 550 },
      { id: 2, name: "Telephone", quantity: 2, price: 120 },
      { id: 3, name: "Charger", quantity: 3, price: 12 },
      { id: 4, name: "Mouse", quantity: 5, price: 15 },
      { id: 5, name: "Fan", quantity: 4, price: 34 },
      { id: 6, name: "Lamp", quantity: 2, price: 27 },
      { id: 7, name: "Headphones", quantity: 4, price: 79 },
      { id: 8, name: "Keyboard", quantity: 5, price: 24 },
    ];
    return { products };
  }
}






