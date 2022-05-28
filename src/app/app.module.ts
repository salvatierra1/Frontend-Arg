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
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosFormComponent } from './componentes/proyectos-form/proyectos-form.component';
import { ExperienciaEducacionFormComponent } from './componentes/experiencia-educacion-form/experiencia-educacion-form.component';
import { HabilidadesFormComponent } from './componentes/habilidades-form/habilidades-form.component';
import { AcercaFormComponent } from './componentes/acerca-form/acerca-form.component';




@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaYEducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    LoginFormComponent,
    HomeComponent,
    ProyectosFormComponent,
    ExperienciaEducacionFormComponent,
    HabilidadesFormComponent,
    AcercaFormComponent
  ],
  imports: [
    BrowserModule,
    MatProgressBarModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
  
    })
 
  ],
  providers: [PorfolioProyectoService, PortfolioPerfilService,{
    provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class NgbdProgressbarShowvalue {
}