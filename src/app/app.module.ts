import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';

import { ExperienciaYEducacionComponent } from './componentes/experiencia-y-educacion/experiencia-y-educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoginFormComponent } from './componentes/login-form/login-form.component';
import { HomeComponent } from './componentes/home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './servicio/interceptor.service';
import { PortfolioPerfilService } from './servicio/portfolio-perfil.service';
import { PorfolioProyectoService } from './servicio/porfolio-proyecto.service';




@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaYEducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    LoginFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MatProgressBarModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PorfolioProyectoService, PortfolioPerfilService,{
    provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class NgbdProgressbarShowvalue {
}