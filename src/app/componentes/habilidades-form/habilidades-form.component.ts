import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Habilidades } from 'src/app/modelo/habilidades';
import { PortfolioHabilidadesService } from 'src/app/servicio/portfolio-habilidades.service';

@Component({
  selector: 'app-habilidades-form',
  templateUrl: './habilidades-form.component.html',
  styleUrls: ['./habilidades-form.component.css']
})
export class HabilidadesFormComponent implements OnInit {

  miFormulario: FormGroup;
  //@Input()formulario:FormGroup;
  constructor(private formBuilder: FormBuilder, private serviceHabilidades: PortfolioHabilidadesService) { }

  ngOnInit(): void {
    this.miFormulario = this.formBuilder.group({

      name: new FormControl('', [
        Validators.required,
      ]),
      percentage: new FormControl('', [
        Validators.required, Validators.min(1), Validators.max(100)
      ])
    });
  }

  /*getters*/

  get name() {
    return this.miFormulario.get("name");
  }

  get percentage() {
    return this.miFormulario.get("percentage");
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

    this.serviceHabilidades.addHabilidades(this.miFormulario.value).subscribe({
      next: (response) => {
        console.log(response);
        window.location.reload();
        alert("Registro con exito")
      },
      error: (err) => {
        console.log(err);

      },
    });
  }

  editHabilidad(habilidad: Habilidades) {
    this.miFormulario.controls['name'].setValue(habilidad.name);
    this.miFormulario.controls['percentage'].setValue(habilidad.percentage);
  }

}
