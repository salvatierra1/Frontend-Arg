import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Habilidades } from '../modelo/habilidades';

@Injectable({
  providedIn: 'root'
})
export class PortfolioHabilidadesService {
  responseGet:any;
  editFormulario:boolean=false;
  url:string = "https://web-production-ae15.up.railway.app/skills/";
  
  constructor(private http:HttpClient) { }

  public addHabilidades(valores:FormGroup){
    this.editFormulario=false;
    return this.http.post<any>(this.url, valores);
  }
  
  public deleteHabilidades(id:number):Observable<any>{
    return this.http.delete<any>(this.url + id);
  }

  getByIdHabilidades(id:number):Observable<any>{
    this.editFormulario=true;
    this.responseGet=this.http.get<Habilidades>(this.url + id);
    return this.responseGet;
  }

  editHabilidad(habilidad:Habilidades){
    return this.http.put<Habilidades>(this.url + habilidad.id, habilidad);
  }

}
