import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicio/auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  miFormulario:FormGroup;
  miError:number=200;
  authenticado:boolean=false;
  router: any;
  service: any;
  
    constructor(private formBuilder: FormBuilder, private authService: AuthService, private ruta:Router) { 
      this.miFormulario=this.formBuilder.group({
        username:new FormControl("", [
          Validators.required, Validators.email
        ]),
        password:new FormControl("", [
          Validators.required, Validators.minLength(6)
        ]),
      })
    }

    ngOnInit(): void {
      
    }
  
    get Username(){
      return this.miFormulario.get("username");
    }
  
    get Password(){
      return this.miFormulario.get("password");
    }
    
    get PasswordValid(){
      return this.Password?.touched && !this.Password?.valid;
    }
    
    onEnviar(event:Event){
      event.preventDefault;
      this.authService.IniciarSesion(this.miFormulario.value).subscribe(data=>{
        console.log("DATA" + JSON.stringify(data));
        this.ruta.navigate(['/home']);
      })
    }
    
  }
  