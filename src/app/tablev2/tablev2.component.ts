
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { MatFormFieldModule } from '@angular/material/form-field';
import { FactureService } from '../services/facture.service';
import { Product } from '../models/product.model';



@Component({
  selector: 'app-tablev2',
  imports: [ReactiveFormsModule, CommonModule, MatTableModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './tablev2.component.html',
  styleUrl: './tablev2.component.css'
})

export class Tablev2Component implements OnInit {
  constructor(private fb: FormBuilder, private factureService: FactureService) {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      price: ['', [Validators.required]]
    });
  }

  displayedColumns: string[] = ['name', 'quantity', 'price'];
  dataSource: Product[] = [];
  totalFunction() {
    let total = 0;
    for (let product of this.dataSource) {
      total += product.quantity * product.price;
    }
    return total;
  }
  total! : number;
  formGroup!: FormGroup;


  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.factureService.getProducts().subscribe((data: Product[]) => {
      this.dataSource = data;
      this.total = this.totalFunction();
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
