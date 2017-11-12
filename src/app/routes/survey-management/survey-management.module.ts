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
import { Table51Component } from './shared/tablecmp/table51/table51.component';
import { Table35Component } from './shared/tablecmp/table35/table35.component';
import { Table46Component } from './shared/tablecmp/table46/table46.component';
import { Table54Component } from './shared/tablecmp/table54/table54.component';
import { Table53Component } from './shared/tablecmp/table53/table53.component';
import { Table58Component } from './shared/tablecmp/table58/table58.component';
import { Table613Component } from './shared/tablecmp/table613/table613.component';
import { Table74Component } from './shared/tablecmp/table74/table74.component';
import { Table715Component } from './shared/tablecmp/table715/table715.component';
import { Table813Component } from './shared/tablecmp/table813/table813.component';
import { Table96Component } from './shared/tablecmp/table96/table96.component';
import { Table913Component } from './shared/tablecmp/table913/table913.component';
import { DatecmpComponent } from './shared/datecmp/datecmp.component';
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
        Table51Component,
        Table35Component,
        Table46Component,
        Table54Component,
        Table53Component,
        Table58Component,
        Table613Component,
        Table74Component,
        Table715Component,
        Table813Component,
        Table96Component,
        Table913Component,
        DatecmpComponent,
        SurveyDetailComponent,
    ]
})
export class SurveyManagementModule { }
