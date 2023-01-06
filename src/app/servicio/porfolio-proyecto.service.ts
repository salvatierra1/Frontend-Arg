import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Proyecto } from '../modelo/proyecto';

@Injectable({
  providedIn: 'root'
})
export class PorfolioProyectoService {
  
  url:string = "web-production-ae15.up.railway.app/project/";
  
  constructor(private http:HttpClient) { }

  public deleteProyecto(id:number):Observable<any>{
    return this.http.delete<any>(this.url + id);
  }

  public addProyecto(valores:FormGroup){
    return this.http.post<any>(this.url, valores);
  }

  editProyect(proyecto:Proyecto){
    return this.http.put<Proyecto>(this.url + proyecto.id, proyecto);
  }

}
