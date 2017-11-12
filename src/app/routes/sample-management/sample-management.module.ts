import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SampleManagementComponent } from './sample-management.component';

const routes: Routes = [
    { path: 'detail', component: SampleManagementComponent }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes),
  ],
    exports: [
        RouterModule
    ],
  declarations: [
      SampleManagementComponent
  ]
})
export class SampleManagementModule { }
