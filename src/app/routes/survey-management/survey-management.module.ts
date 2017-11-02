import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { SurveyManagementComponent } from './survey-management/survey-management.component';

const routes: Routes = [
    { path: 'detail', component: SurveyManagementComponent }
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
        SurveyManagementComponent
    ]
})
export class SurveyManagementModule { }
