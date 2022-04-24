import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicio/auth.service';
import { PortfolioPerfilService } from 'src/app/servicio/portfolio-perfil.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  miPortfolio:any;
  estaAuth:boolean=false;
  constructor(private perfilPortfolio:PortfolioPerfilService, private authService: AuthService) { }

  ngOnInit(): void {

    this.perfilPortfolio.obtenerDatos().subscribe(data=>{
      this.miPortfolio=data.acercaEntities[0]; 
    });
    this.estaAuth=this.authService.estaAuth;
  }
  
}
