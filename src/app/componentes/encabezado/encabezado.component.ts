import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicio/auth.service';
import { PortfolioPerfilService } from 'src/app/servicio/portfolio-perfil.service';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  miPortfolio: any;
  estaAuth: boolean = false;
  miFormulario: FormGroup;
  constructor(private formBuilder: FormBuilder, private servicePerfil: PortfolioPerfilService, private authService: AuthService, private router: Router) {

    this.miFormulario = this.formBuilder.group({

      id: new FormControl('', [

      ]),
      name: new FormControl('', [
        Validators.required,
      ]),
      title: new FormControl('', [
        Validators.required
      ]),
      location: new FormControl('', [
        Validators.required
      ]),
      imageUrl: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
      this.servicePerfil.obtenerDatos().subscribe(data => {
      this.miPortfolio = data;
    });

    this.estaAuth = this.authService.estaAuth;

  }

  get id() {
    return this.miFormulario.get("id");
  }

  get name() {
    return this.miFormulario.get("name");
  }

  get title() {
    return this.miFormulario.get("title");
  }

  get location() {
    return this.miFormulario.get("location");
  }
  get imageUrl() {
    return this.miFormulario.get("imageUrl");
  }

  cerrarLogin() {
    this.estaAuth = false;
    this.authService.cerrar();
    window.location.reload();
  }

  editPerfil(perfil: any) {
    console.log(perfil);
    this.miFormulario.controls['id'].setValue(perfil.id);
    this.miFormulario.controls['name'].setValue(perfil.name);
    this.miFormulario.controls['title'].setValue(perfil.title);
    this.miFormulario.controls['location'].setValue(perfil.location);
    this.miFormulario.controls['imageUrl'].setValue(perfil.imageUrl);
  }

  onEdit() {

    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    this.servicePerfil.editPerfil(this.miFormulario.value).subscribe({
      next: (response) => {
        console.log(response);
        window.location.reload();
      },
      error: (err) => {
        console.log(err);

      },
    });
  }
}
