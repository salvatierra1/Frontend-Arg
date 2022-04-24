import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioPerfilService {
  estaAuth:boolean;
  
  url:string = "http://localhost:8080/perfil/";
 
   
  constructor(private http:HttpClient, private authsService:AuthService) { }

  obtenerDatos():Observable<any>{

    return this.http.get<any>(this.url + "2");

  }
 
}
