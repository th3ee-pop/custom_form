import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { RecordResolverGuard } from '@core/services/edit.guard.service';

import { InputcmpComponent } from './shared/inputcmp/inputcmp.component';
import { RadiocmpComponent } from './shared/radiocmp/radiocmp.component';
import { IdccmpComponent} from './shared/idccmp/idccmp.component';
import { PhoneComponent} from './shared/phonecmp/phonecmp.component';
import { CheckboxcmpComponent } from './shared/checkboxcmp/checkboxcmp.component';
import { SurveyOverviewComponent } from './survey-overview/survey-overview.component';
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
import { Info0Component } from './info0/info0.component';

const routes: Routes = [
    { path: 'detail', component: SurveyOverviewComponent  },
    { path: 'info0', component: Info0Component  }
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
        InputcmpComponent,
        RadiocmpComponent,
        PhoneComponent,
        IdccmpComponent,
        CheckboxcmpComponent,
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
        Info0Component
    ],
    providers: [
        RecordResolverGuard
    ]
})
export class SurveyManagementModule { }
