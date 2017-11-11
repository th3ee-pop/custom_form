import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { SurveyManagementComponent } from './survey-management/survey-management.component';
/*在下面添加新的组件类型*/

/*自定义组件类型*/
import { InputcmpComponent } from './shared/inputcmp/inputcmp.component';
import { RadiocmpComponent } from './shared/radiocmp/radiocmp.component';
import { IdccmpComponent} from './shared/idccmp/idccmp.component';
import { PhoneComponent} from './shared/phonecmp/phonecmp.component';
import { CheckboxcmpComponent } from './shared/checkboxcmp/checkboxcmp.component';
import { TablecmpComponent } from './shared/tablecmp/tablecmp.component';
import { SurveyOverviewComponent } from './survey-overview/survey-overview.component';
import { SurveyDetailComponent } from './survey-detail/survey-detail.component';

/**/

// import { MdRadioModule, MdInputModule} from '@angular/material';

const routes: Routes = [
    // { path: 'detail', component: SurveyOverviewComponent }



    { path: 'management', component: SurveyManagementComponent },
    {
        path: 'detail',
        component: SurveyOverviewComponent,
    },
    { path: 'overview', component: SurveyOverviewComponent },
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        SurveyManagementComponent,
        InputcmpComponent,
        RadiocmpComponent,
        PhoneComponent,
        IdccmpComponent,
        CheckboxcmpComponent,
        TablecmpComponent,
        SurveyOverviewComponent,
        SurveyDetailComponent,
    ]
})
export class SurveyManagementModule { }
