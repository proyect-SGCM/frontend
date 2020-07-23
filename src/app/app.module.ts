import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Rutas
import { APP_ROUTES } from './app.routes';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';
import { RolesComponent } from './pages/roles/roles.component';
import { RolesService } from './services/roles.service';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosService } from './services/usuarios.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    DashboardComponent,
    ProgressComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    PagesComponent,
    RegisterComponent,
    RolesComponent,
    MedicosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTES,
    HttpClientModule
  ],
  providers: [
    RolesService,
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
