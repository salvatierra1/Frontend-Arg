import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/modelo/educacion';
import { AuthService } from 'src/app/servicio/auth.service';
import { PortfolioEducacionService } from 'src/app/servicio/portfolio-educacion.service';
import { PortfolioPerfilService } from 'src/app/servicio/portfolio-perfil.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experiencia-y-educacion',
  templateUrl: './experiencia-y-educacion.component.html',
  styleUrls: ['./experiencia-y-educacion.component.css']
})
export class ExperienciaYEducacionComponent implements OnInit {
  miPortfolio: any;
  estaAuth: boolean = false;
  miFormulario: FormGroup;
  constructor(private formBuilder: FormBuilder, private perfilPortfolio: PortfolioPerfilService, private authService: AuthService, private serviceEducacion: PortfolioEducacionService) {

    this.miFormulario = this.formBuilder.group({
      id: new FormControl('', [

      ]),
      institute: new FormControl('', [
        Validators.required,
      ]),
      title: new FormControl('', [
        Validators.required,
      ]),
      startDate: new FormControl('', [
        Validators.required,
      ]),
      finishDate: new FormControl('', [
        Validators.required,
      ]),
      imageUrl: new FormControl('', [
        Validators.required,
      ])
    });
  }

  ngOnInit(): void {

    this.perfilPortfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio = data.educationCollection;
    });
    this.estaAuth = this.authService.estaAuth;
  }

  /*getters*/

  get id() {
    return this.miFormulario.get("id");
  }

  get institute() {
    return this.miFormulario.get("institute");
  }

  get title() {
    return this.miFormulario.get("title");
  }

  get startDate() {
    return this.miFormulario.get("startDate");
  }

  get finishDate() {
    return this.miFormulario.get("finishDate");
  }

  get imageUrl() {
    return this.miFormulario.get("imageUrl");
  }

  /* submit  */

  onEdit() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    this.serviceEducacion.editEducacion(this.miFormulario.value).subscribe({
      next: (response) => {
        console.log(response);
        window.location.reload();
        alert("Modificación con exito")
      },
      error: (err) => {
        console.log(err);

      },
    });
  }

  editEducacion(educacion: Educacion) {
    console.log(educacion);
    this.miFormulario.controls['id'].setValue(educacion.id);
    this.miFormulario.controls['institute'].setValue(educacion.institute);
    this.miFormulario.controls['title'].setValue(educacion.title);
    this.miFormulario.controls['startDate'].setValue(educacion.startDate);
    this.miFormulario.controls['finishDate'].setValue(educacion.finishDate);
    this.miFormulario.controls['imageUrl'].setValue(educacion.imageUrl);
  }

  deleteEducacion(id: number): void {
    this.serviceEducacion.deleteEducacion(id).subscribe({
      next: () => {
        window.location.reload();
        alert("Delete con exito")
      }
    });
  }
}
