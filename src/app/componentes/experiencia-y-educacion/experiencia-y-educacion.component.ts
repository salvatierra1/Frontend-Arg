import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicio/auth.service';
import { PortfolioPerfilService } from 'src/app/servicio/portfolio-perfil.service';

@Component({
  selector: 'app-experiencia-y-educacion',
  templateUrl: './experiencia-y-educacion.component.html',
  styleUrls: ['./experiencia-y-educacion.component.css']
})
export class ExperienciaYEducacionComponent implements OnInit {
  miPortfolio:any;
  estaAuth:boolean=false;

  constructor(private perfilPortfolio:PortfolioPerfilService, private authService: AuthService) { }

  ngOnInit(): void {

    this.perfilPortfolio.obtenerDatos().subscribe(data=>{
      this.miPortfolio=data.educacionEntities; 
    });
    this.estaAuth = this.authService.estaAuth;
  }

}
