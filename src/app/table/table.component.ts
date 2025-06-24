import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-table',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  products = [
    { id: 1, name: "Laptop", quantity: 1, price: 550 },
    { id: 2, name: "Telephone", quantity: 2, price: 120 },
    { id: 3, name: "Charger", quantity: 3, price: 12 },
    { id: 4, name: "Mouse", quantity: 5, price: 15 },
    { id: 5, name: "Fan", quantity: 4, price: 34 },
    { id: 6, name: "Lamp", quantity: 2, price: 27 },
    { id: 7, name: "Headphones", quantity: 4, price: 79 },
    { id: 8, name: "Keyboard", quantity: 5, price: 24 },
  ];

  totalFunction() {
    let total = 0;
    for (let product of this.products) {
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
  onSubmit(){
    if(this.formGroup.valid){
      this.products.push({...this.formGroup.value});
      this.formGroup.reset();
      this.total = this.totalFunction();
    } 
  }

}
