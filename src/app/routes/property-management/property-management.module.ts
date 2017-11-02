import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PropertyManagementComponent } from './property-management.component';

const routes:Routes = [
    { path: 'detail', component: PropertyManagementComponent }
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes),
  ],
    exports:[
        RouterModule
    ],
  declarations: [
      PropertyManagementComponent
  ]
})
export class PropertyManagementModule { }
