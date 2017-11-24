import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PropertyManagementComponent } from './property-management.component';
import {NgZorroAntdModule} from "ng-zorro-antd";

const routes:Routes = [
    { path: 'detail', component: PropertyManagementComponent }
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes),
      NgZorroAntdModule.forRoot()
  ],
    exports:[
        RouterModule
    ],
  declarations: [
      PropertyManagementComponent
  ]
})
export class PropertyManagementModule { }
