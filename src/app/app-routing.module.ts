import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },
      {
        path: 'event',
        loadChildren: () => import('./features/event/event.module').then(m => m.EventModule)
      },
      {
        path: 'departement',
        loadChildren: () => import('./features/departement/departement.module').then(m => m.DepartementModule)
      },
      {
        path: 'equipe',
        loadChildren: () => import('./features/equipe/equipe.module').then(m => m.EquipeModule)
      },
      {
        path: 'employee',
        loadChildren: () => import('./features/employee/employee.module').then(m => m.EmployeeModule)
      },
      {
        path: 'conge',
        loadChildren: () => import('./features/conge/conge.module').then(m => m.CongeModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];
