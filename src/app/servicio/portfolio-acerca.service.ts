import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Acerca } from '../modelo/acerca';

@Injectable({
  providedIn: 'root'
})
export class PortfolioAcercaService {

  public deleteAcerca(id:number):Observable<any>{
    return this.http.delete<any>(this.url + id);
  }
  
  
  url:string = "https://fathomless-cliffs-73656.herokuapp.com/about/";
  constructor(private http:HttpClient) {

   }

 
  public addAcerca(valores:FormGroup){
    return this.http.post<any>(this.url, valores);
  }
  
  editAcerca(acerca:Acerca){
    return this.http.put<Acerca>(this.url + acerca.id, acerca);
  }
}
