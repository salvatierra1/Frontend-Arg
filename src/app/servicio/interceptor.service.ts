import { Injectable } from '@angular/core';
import { HttpEvent,HttpHandler,HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private authServicio: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    var currentUser= JSON.parse(localStorage.getItem("currentUser"));

    if(currentUser && currentUser.jwt){
      req=req.clone({
        setHeaders:{
          Authorization: `Bearer ${currentUser.jwt}`
        }
      })
    }
    return next.handle(req);
  }
        
}
