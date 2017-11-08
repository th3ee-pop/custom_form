import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UserManagementComponent } from './user-management/user-management.component';

const routes:Routes = [
    { path: 'detail', component: UserManagementComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),

  ],
    exports:[
        RouterModule
    ],
    declarations: [
        UserManagementComponent
    ]
})
export class UserManagementModule { }
