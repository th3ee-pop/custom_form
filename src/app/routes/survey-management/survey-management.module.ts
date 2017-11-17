import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { FirstStepComponent} from './step-first/first-step.component';
import { SecondStepComponent} from './step-second/second-step.component';
import { ThirdStepComponent} from './step-third/third-step.component';
import { ForthStepComponent} from './step-forth/forth-step.component';
import { FifthStepComponent} from './step-fifth/fifth-step.component';

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
import { SixthStepComponent } from './step-sixth/sixth-step.component';
import { SeventhStepComponent } from './step-seventh/seventh-step.component';
import { EighthStepComponent} from './step-eighth/eighth-step.component';
import { NinthStepComponent} from './step-ninth/ninth-step.component';
import { TenthStepComponent} from './step-tenth/tenth-step.component';

const routes: Routes = [
    { path: 'detail', component: SurveyOverviewComponent  },
    { path: 'first_step', component: FirstStepComponent },
    { path: 'first_step/:PID', component: FirstStepComponent },
    { path: 'second_step/:PID', component: SecondStepComponent },
    { path: 'third_step/:PID', component: ThirdStepComponent},
    { path: 'forth_step/:PID', component: ForthStepComponent},
    { path: 'fifth_step/:PID', component: FifthStepComponent},
    { path: 'sixth_step/:PID', component: SixthStepComponent},
    { path: 'seventh_step/:PID', component: SeventhStepComponent},
    { path: 'eighth_step/:PID', component: EighthStepComponent},
    { path: 'ninth_step/:PID', component: NinthStepComponent},
    { path: 'tenth_step/:PID', component: TenthStepComponent}
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
        FirstStepComponent,
        SecondStepComponent,
        ThirdStepComponent,
        ForthStepComponent,
        FifthStepComponent,
        SixthStepComponent,
        SeventhStepComponent,
        EighthStepComponent,
        NinthStepComponent,
        TenthStepComponent
    ]
})
export class SurveyManagementModule { }
