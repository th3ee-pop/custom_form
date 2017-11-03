import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { SurveyManagementComponent } from './survey-management/survey-management.component';
/*在下面添加新的组件类型*/

import { RadiocmpComponent} from './shared/radiocmp/radiocmp.component';
/**/
import { MatRadioModule } from '@angular/material';
const routes: Routes = [
    { path: 'detail', component: SurveyManagementComponent }
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
        MatRadioModule
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        SurveyManagementComponent,
        RadiocmpComponent
    ]
})
export class SurveyManagementModule { }
