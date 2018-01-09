/**
 * Created by th3ee on 1/4/18.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { MultiTableComponent } from './multi-table/multi-table.component';
import { SelectableTableComponent } from './selectable-table/selectable-table.component';
const routes: Routes = [
    {path: 'example', component: ExampleComponent},
    {path: 'multi-table', component: MultiTableComponent},
    {path: 'selectable-table', component: SelectableTableComponent}
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
    ExampleComponent,
    MultiTableComponent,
    SelectableTableComponent
    ],
    providers: [
    ],
    entryComponents: [
    ]
})
export class UsefulTablesModule { }
