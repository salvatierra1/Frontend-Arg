import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PorfolioProyectoService } from 'src/app/servicio/porfolio-proyecto.service';

@Component({
  selector: 'app-proyectos-form',
  templateUrl: './proyectos-form.component.html',
  styleUrls: ['./proyectos-form.component.css']
})
export class ProyectosFormComponent implements OnInit {
  miFormulario: FormGroup;
  constructor(private formBuilder: FormBuilder, private serviceProyecto: PorfolioProyectoService) { }

  ngOnInit(): void {
    this.miFormulario = this.formBuilder.group({
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

  /*getters*/

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

  onSubmit() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    this.serviceProyecto.addProyecto(this.miFormulario.value).subscribe({
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
