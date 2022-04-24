import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicio/auth.service';
import { PortfolioPerfilService } from 'src/app/servicio/portfolio-perfil.service';


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
 
})
export class HabilidadesComponent implements OnInit {

  miPortfolio:any;
  estaAuth:boolean;
  
  constructor(private perfilPortfolio:PortfolioPerfilService, private authService: AuthService) { }

  ngOnInit(): void {

    this.perfilPortfolio.obtenerDatos().subscribe(data=>{
      this.miPortfolio=data.habilidadesEntities; 
    });
    
    this.estaAuth = this.authService.estaAuth;
  }


}
