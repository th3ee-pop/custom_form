import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';



/**
* 体检调查模块路由
* */
export const routes: Routes = [
  {
    path: 'ssurvey',
    component: SpecialistComponent,
    canActivate: [ DeskAuthGuard ],
    data: {'user': 'specialist',
      'name': '专家'},
    children: [
      { path: '', redirectTo: 'pacs', pathMatch: 'full'},
      { path: 'pacs', component: PacsComponent },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
