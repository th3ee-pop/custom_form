import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
    { path: 'detail', component: UserManagementComponent }
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),

  ],
    exports: [
        RouterModule
    ],
    declarations: [
        UserManagementComponent
    ]
})
export class UserManagementModule { }
