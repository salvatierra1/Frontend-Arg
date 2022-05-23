import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  estaAuth:boolean;
  url:string = "https://fathomless-cliffs-73656.herokuapp.com/auth/signin";

  currentUserSubject: BehaviorSubject<any>;

  constructor(private http:HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'))
    if(localStorage.getItem("currentUser")){
      this.estaAuth = true;
    } else {
      this.estaAuth = false;
    }
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
