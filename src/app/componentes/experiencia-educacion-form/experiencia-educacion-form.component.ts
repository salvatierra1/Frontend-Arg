import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PortfolioEducacionService } from 'src/app/servicio/portfolio-educacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experiencia-educacion-form',
  templateUrl: './experiencia-educacion-form.component.html',
  styleUrls: ['./experiencia-educacion-form.component.css']
})
export class ExperienciaEducacionFormComponent implements OnInit {

  miFormulario: FormGroup;
  constructor(private formBuilder: FormBuilder, private serviceEducacion: PortfolioEducacionService) { }

  ngOnInit(): void {
    this.miFormulario = this.formBuilder.group({
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
  /*getters*/

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

  onSubmit() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    this.serviceEducacion.addEducacion(this.miFormulario.value).subscribe({
      next: (response) => {
        console.log(response);
        window.location.reload();
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )
      },
      error: (err) => {
        console.log(err);

      },
    });
  }
}
