import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { RecordResolverGuard } from '@core/services/edit.guard.service';
import { StatisticsOverviewComponent} from './statistics-overview/statistics-overview.component';
import { ChartsComponent} from './charts/charts.component';
import {AngularEchartsModule} from 'ngx-echarts';
const routes: Routes = [
     { path: 'detail', component: StatisticsOverviewComponent  },
     { path: 'charts/:CID', component: ChartsComponent }
    // { path: 'singlePg', component: SinglePgComponent  },
    // { path: 'singlePg/:PID', component: SinglePgComponent },

];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
        AngularEchartsModule
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        StatisticsOverviewComponent,
        ChartsComponent
        // InputcmpComponent,
        // RadiocmpComponent,
        // PhoneComponent,
        // IdccmpComponent,
        // CheckboxcmpComponent,
        // SurveyOverviewComponent,
        // DatecmpComponent,
        // SingletableComponent,
        // ExampleComponent,
        // SelectableTableComponent,
        // Table52Component,
        // MultiTableComponent,
        // Table53Component,
        // Table54Component,
        // Table55Component,
        // Table71Component,
        // SinglePgComponent,
        // Table64Component,
        // SelectableInputComponent,
        // MultiRadioComponent,
        // AutoIncInputComponent,
        // AddrcmpComponent,
        // HighTableComponent
    ],
    providers: [
        RecordResolverGuard
    ],
    entryComponents: [
    ]
})
export class StatisticsManagementModule { }
