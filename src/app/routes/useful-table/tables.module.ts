/**
 * Created by th3ee on 1/4/18.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './example/example.component';
const routes: Routes = [
    {path: 'example', component: ExampleComponent}
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
    ExampleComponent
    ],
    providers: [
    ],
    entryComponents: [
    ]
})
export class UsefulTablesModule { }
