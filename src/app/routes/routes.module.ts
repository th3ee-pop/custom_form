import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { routes } from './routes';
import { DashboardV1Component } from './dashboard/v1/v1.component';

import { LoginAuthService } from './pages/login/login.auth.service';
import { LoginAuthGuard } from './pages/login/login.guard.service';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(routes, { useHash: true }),
        PagesModule
    ],
    declarations: [
        DashboardV1Component,
    ],
    exports: [
        RouterModule
    ],
    providers: [
        LoginAuthGuard,
        LoginAuthService
    ]
})

export class RoutesModule {}
