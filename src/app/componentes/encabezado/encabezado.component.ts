import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicio/auth.service';

import { PortfolioPerfilService } from 'src/app/servicio/portfolio-perfil.service';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  miPortfolio:any;
  estaAuth:boolean=false;
  constructor(private perfilPortfolio:PortfolioPerfilService, private authService:AuthService, private router:Router) { }

  ngOnInit(): void {

    this.perfilPortfolio.obtenerDatos().subscribe(data=>{
      console.log("Datos personales" + JSON.stringify (data));
      this.miPortfolio=data; 
    });

    this.estaAuth = this.authService.estaAuth;
     
  }

  cerrarLogin(){
    this.estaAuth=false;
    window.location.reload();
  }
  
}
