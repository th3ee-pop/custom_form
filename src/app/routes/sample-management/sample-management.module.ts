import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {
    FormsModule,ReactiveFormsModule }
    from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SampleManagementComponent } from './sample-management.component';
import { SampleFormComponent } from './sample-form/sample-form.component';
import { SampleAddComponent } from './sample-add/sample-add.component';

const routes:Routes = [
    { path: 'detail', component: SampleManagementComponent },
    { path: 'add', component: SampleAddComponent}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes),
      FormsModule,
      ReactiveFormsModule ,
      NgZorroAntdModule.forRoot()
  ],
    exports: [
        RouterModule
    ],
  declarations: [
      SampleManagementComponent,
      SampleFormComponent,
      SampleAddComponent
  ]
})
export class SampleManagementModule { }
