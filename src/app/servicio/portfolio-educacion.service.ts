import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Educacion } from '../modelo/educacion';

@Injectable({
  providedIn: 'root'
})
export class PortfolioEducacionService {
  
  url:string = "web-production-ae15.up.railway.app/education/";
  constructor(private http:HttpClient) { }

  public addEducacion(valores:FormGroup){
    return this.http.post<any>(this.url, valores);
  }
  
  public deleteEducacion(id:number):Observable<any>{
    return this.http.delete<any>(this.url + id);
  }

  editEducacion(educacion:Educacion){
    return this.http.put<Educacion>(this.url + educacion.id, educacion);
  }

}
