import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TraceManagementComponent } from './trace-management.component';

const routes:Routes = [
    { path: 'detail', component: TraceManagementComponent }
];

@NgModule({
  imports: [
    CommonModule,
      RouterModule.forChild(routes),
      NgZorroAntdModule.forRoot()
  ],
    exports:[
      RouterModule
    ],
  declarations: [
      TraceManagementComponent
  ]
})
export class TraceManagementModule { }
