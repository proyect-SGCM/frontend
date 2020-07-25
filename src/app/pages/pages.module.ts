import { NgModule } from '@angular/core';
import { RolesComponent } from './roles/roles.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    RolesComponent,
    DashboardComponent,
    PagesComponent,
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ],
  exports: [
    RolesComponent,
    DashboardComponent
  ]
})
export class PagesModule { }
