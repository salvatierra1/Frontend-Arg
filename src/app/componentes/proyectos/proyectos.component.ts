import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicio/auth.service';
import { PorfolioProyectoService } from 'src/app/servicio/porfolio-proyecto.service';
import { PortfolioPerfilService } from 'src/app/servicio/portfolio-perfil.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  miPortfolio:any;
  estaAuth:boolean;
  constructor(private perfilPortfolio:PortfolioPerfilService, private router:Router, private portfolioProyecto:PorfolioProyectoService, private authService: AuthService) { }

  ngOnInit(): void {


    this.perfilPortfolio.obtenerDatos().subscribe(data=>{
      this.miPortfolio=data.proyectoEntities; 
    });

    this.estaAuth = this.authService.estaAuth;
  
  }

  deleteProyec(id:number):void{
      this.portfolioProyecto.deleteProyectos(id).subscribe();
      console.log("DELETE.OK");
     window.location.reload();
  }

}
