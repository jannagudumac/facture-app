import { Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { Tablev2Component } from './tablev2/tablev2.component';

export const routes: Routes = [
    { path: 'table', component: TableComponent, title: 'Table' },
    { path: 'tablev2', component: Tablev2Component, title: 'Table V2' }
];
