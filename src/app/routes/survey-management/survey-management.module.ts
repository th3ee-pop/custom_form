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
import { SingletableComponent} from './shared/tablecmp/singleTable/singletable.component';
import { Table71Component } from './shared/tablecmp/Table71/Table71.component';
import { DatecmpComponent } from './shared/datecmp/datecmp.component';
import { ExampleComponent } from '../useful-table/example/example.component';
import { MultiTableComponent } from '../useful-table/multi-table/multi-table.component';
import { SelectableTableComponent } from '../useful-table/selectable-table/selectable-table.component';
import { Table52Component } from '../useful-table/table52/table52.component';
import { Table53Component } from '../useful-table/table53/table53.component';
import { Table54Component } from '../useful-table/table54/table54.component';
import { Table55Component } from '../useful-table/table55/table55.component';
import { Info1Component } from './info1/info1.cpomponent';
import { Info0Component } from './info0/info0.component';
import { Info2Component } from './info2/info2.component';
import { Info3Component } from './info3/info3.cpomponent';
import { Info4Component } from './info4/info4.cpomponent';
import { Info5Component } from './info5/info5.component';
import { Info6Component } from './info6/info6.component';
import { Info7Component} from './info7/info7.cpomponent';
import { Table64Component } from './shared/tablecmp/table64/table64.component';
import { SelectableInputComponent } from './shared/tablecmp/selectable-input/selectable-input.component';
import { MultiRadioComponent } from './shared/tablecmp/multi-radio/multi-radio.component';
import { AutoIncInputComponent } from './shared/tablecmp/auto-inc-input/auto-inc-input.component';
import { AddrcmpComponent } from './shared/addrcmp/addrcmp.component';
import { Info8Component } from './info8/info8.component';
import { NzModalInfo8Component } from './info8/info8.modal.component';
import { HighTableComponent } from '../useful-table/high-table/high-table.component';

const routes: Routes = [
    { path: 'detail', component: SurveyOverviewComponent  },
    { path: 'info0', component: Info0Component  },
    { path: 'info1/:PID', component: Info1Component },
    { path: 'info0/:PID', component: Info0Component },
    { path: 'info2/:PID', component: Info2Component },
    { path: 'info3/:PID', component: Info3Component },
    { path: 'info4/:PID', component: Info4Component },
    { path: 'info5/:PID', component: Info5Component },
    { path: 'info6/:PID', component: Info6Component },
    { path: 'info6', component: Info6Component },
    { path: 'info7/:PID', component: Info7Component },
    { path: 'info8/:PID', component: Info8Component}
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
        DatecmpComponent,
        SingletableComponent,
        ExampleComponent,
        SelectableTableComponent,
        Table52Component,
        MultiTableComponent,
        Table53Component,
        Table54Component,
        Table55Component,
        Table71Component,
        Info1Component,
        Info0Component,
        Info2Component,
        Info3Component,
        Info4Component,
        Info5Component,
        Info7Component,
        Info6Component,
        Info8Component,
        Table64Component,
        SelectableInputComponent,
        MultiRadioComponent,
        AutoIncInputComponent,
        AddrcmpComponent,
        HighTableComponent,
        NzModalInfo8Component
    ],
    providers: [
        RecordResolverGuard
    ],
    entryComponents: [
        NzModalInfo8Component
    ]
})
export class SurveyManagementModule { }
