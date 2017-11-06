import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';



/**
* 体检调查模块路由
* */
export const routes: Routes = [
  {
    path: 'ssurvey',
    data: {'user': 'specialist',
      'name': '专家'},
    children: [
      { path: '', redirectTo: 'pacs', pathMatch: 'full'},
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
