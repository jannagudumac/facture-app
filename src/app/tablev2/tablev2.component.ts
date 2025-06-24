
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { MatFormFieldModule } from '@angular/material/form-field';
import { DataSource } from '@angular/cdk/table';

export interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

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

@Component({
  selector: 'app-tablev2',
  imports: [ReactiveFormsModule, CommonModule, MatTableModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './tablev2.component.html',
  styleUrl: './tablev2.component.css'
})

export class Tablev2Component {

  displayedColumns: string[] = ['name', 'quantity', 'price'];
  dataSource = products;
  totalFunction() {
    let total = 0;
    for (let product of this.dataSource) {
      total += product.quantity * product.price;
    }
    return total;
  }
  total = this.totalFunction();

  formGroup!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      price: ['', [Validators.required]]
    });
  }
  onSubmit() {
    if (this.formGroup.valid) {
      this.dataSource.push({ ...this.formGroup.value }); // Adds a new product to the data source
      this.dataSource = [...this.dataSource]; // Triggers the update of the table
      this.formGroup.reset();
      this.total = this.totalFunction();
      
    }
  };
}
