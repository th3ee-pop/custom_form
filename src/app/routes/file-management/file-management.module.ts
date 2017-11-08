import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FileManagementComponent } from './file-management.component';

const routes:Routes = [
    { path: 'detail', component: FileManagementComponent }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
    exports:[
        RouterModule
    ],
  declarations: [
      FileManagementComponent
  ]
})
export class FileManagementModule { }
