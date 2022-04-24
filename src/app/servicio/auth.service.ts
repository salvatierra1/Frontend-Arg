import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  estaAuth:boolean=false;
  url:string = "http://localhost:8080/auth/signin";

  currentUserSubject: BehaviorSubject<any>;

  constructor(private http:HttpClient) { 

  console.log("iniciando seccion");
  
  this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'))

  }

  IniciarSesion(credenciales:any):Observable<any>{

    return this.http.post(this.url, credenciales).pipe(map(data=>{
      localStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      this.estaAuth = true;
      return data;
    }))
  }

  get UsuarioAutenticado(){
    return localStorage.getItem("currentUser");
  }

  cerrar(){
    localStorage.clear();
  }


}
