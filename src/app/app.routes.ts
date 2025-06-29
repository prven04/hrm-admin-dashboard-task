import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout-component/layout-component';
import { EmployeesComponent } from './components/employees-component/employees-component';
import { DashboardComponent } from './components/dashboard-component/dashboard-component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'employees',
        loadComponent: () =>
          import('./components/employees-component/employees-component').then(
            (m) => m.EmployeesComponent
          ),
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./components/dashboard-component/dashboard-component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./components/settings-component/settings-component').then(
            (m) => m.SettingsComponent
          ),
      },
    ],
  },
];
