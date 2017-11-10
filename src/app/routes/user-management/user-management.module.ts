import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { RandomUserService } from '../tables/randomUser.service';

import { UserManagementComponent } from './user-management/user-management.component';
import { UserSettingsComponent } from './user-setting/settings.component';
const routes: Routes = [
    { path: 'detail', component: UserManagementComponent },
    { path: 'setting', component: UserSettingsComponent }
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
        UserManagementComponent,
        UserSettingsComponent
    ],
    providers: [
        RandomUserService
    ]
})
export class UserManagementModule { }
