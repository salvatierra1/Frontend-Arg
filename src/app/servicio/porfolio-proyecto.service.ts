import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorfolioProyectoService {

  url:string = "http://localhost:8080/proyecto/";
  
  constructor(private http:HttpClient) { }

  deleteProyectos(id:number):Observable<any>{

    return this.http.delete<any>(this.url + id);
   
  }
}
