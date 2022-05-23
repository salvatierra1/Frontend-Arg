import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/modelo/proyecto';
import { AuthService } from 'src/app/servicio/auth.service';
import { PorfolioProyectoService } from 'src/app/servicio/porfolio-proyecto.service';
import { PortfolioPerfilService } from 'src/app/servicio/portfolio-perfil.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  miPortfolio: any;
  estaAuth: boolean = false;
  miFormulario: FormGroup;
  constructor(private formBuilder: FormBuilder, private perfilPortfolio: PortfolioPerfilService, private router: Router, private serviceProyecto: PorfolioProyectoService, private authService: AuthService) {
    this.miFormulario = this.formBuilder.group({
      id: new FormControl('', [

      ]),
      name: new FormControl('', [
        Validators.required,
      ]),
      information: new FormControl('', [
        Validators.required,
      ]),
      imageUrl: new FormControl('', [
        Validators.required,
      ]),
      repoUrl: new FormControl('', [
        Validators.required,
      ])
    });
  }

  ngOnInit(): void {
    this.perfilPortfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio = data.projectCollection;
    });
    this.estaAuth = this.authService.estaAuth;
  }

  deleteProyecto(id: number): void {
    this.serviceProyecto.deleteProyecto(id).subscribe({
      next: () => {
        window.location.reload();
      }
    });
  }

  editByIdProyecto(proyecto: Proyecto): void {
    console.log(proyecto);
    this.miFormulario.controls['id'].setValue(proyecto.id);
    this.miFormulario.controls['name'].setValue(proyecto.name);
    this.miFormulario.controls['information'].setValue(proyecto.information);
    this.miFormulario.controls['imageUrl'].setValue(proyecto.imageUrl);
    this.miFormulario.controls['repoUrl'].setValue(proyecto.repoUrl);
  }

  /*getters*/

  get id() {
    return this.miFormulario.get("id");
  }

  get name() {
    return this.miFormulario.get("name");
  }

  get information() {
    return this.miFormulario.get("information");
  }

  get imageUrl() {
    return this.miFormulario.get("imageUrl");
  }

  get repoUrl() {
    return this.miFormulario.get("repoUrl");
  }

  /* submit  */

  onEdit() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    this.serviceProyecto.editProyect(this.miFormulario.value).subscribe({
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
