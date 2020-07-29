import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { RolService } from './services/rol.service';
import { EspecialidadesComponent } from './pages/especialidades/especialidades.component';
import { EspecialidadService } from './services/especialidad.service';
import { MedicoService } from './services/medico.service';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { ExamenService } from './services/examen.service';
import { ExamenesComponent } from './pages/examenes/examenes.component';
import { PacienteService } from './services/paciente.service';
import { PacientesComponent } from './pages/pacientes/pacientes.component';

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
    EspecialidadesComponent,
    MedicosComponent,
    ExamenesComponent,
    PacientesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTES
  ],
  providers: [
    RolService,
    EspecialidadService,
    MedicoService,
    ExamenService,
    PacienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
