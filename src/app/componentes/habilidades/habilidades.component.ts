import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Habilidades } from 'src/app/modelo/habilidades';
import { AuthService } from 'src/app/servicio/auth.service';
import { PortfolioHabilidadesService } from 'src/app/servicio/portfolio-habilidades.service';
import { PortfolioPerfilService } from 'src/app/servicio/portfolio-perfil.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']

})
export class HabilidadesComponent implements OnInit {

  miPortfolio: any;
  estaAuth: boolean = false;
  miFormulario: FormGroup;
  constructor(private formBuilder: FormBuilder, private perfilPortfolio: PortfolioPerfilService, private authService: AuthService, private serviceHabilidades: PortfolioHabilidadesService) {

    this.miFormulario = this.formBuilder.group({

      name: new FormControl('', [
        Validators.required,
      ]),
      percentage: new FormControl('', [
        Validators.required, Validators.min(1), Validators.max(100)
      ]),
      id: new FormControl('', [

      ])

    });

  }

  ngOnInit(): void {
    this.perfilPortfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio = data.skillsCollection;
    });

    this.estaAuth = this.authService.estaAuth;
  }

  deleteHabilidades(id: number): void {
    this.serviceHabilidades.deleteHabilidades(id).subscribe({
      next: () => {
        window.location.reload();
        alert("Delete con exito");
      }
    });
  }


  getByIdHabilidad(habilidad: Habilidades): void {
    console.log(habilidad);
    this.miFormulario.controls['name'].setValue(habilidad.name);
    this.miFormulario.controls['percentage'].setValue(habilidad.percentage);
  }

  get id() {
    return this.miFormulario.get("id");
  }

  get name() {
    return this.miFormulario.get("name");
  }

  get percentage() {
    return this.miFormulario.get("percentage");
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
        Swal.fire('Hey user!', 'You are the rockstar!', 'info');


      },
      error: (err) => {
        console.log(err);

      },
    });
  }

  editHabilidad(habilidad: Habilidades) {
    console.log(habilidad);
    this.miFormulario.controls['id'].setValue(habilidad.id);
    this.miFormulario.controls['name'].setValue(habilidad.name);
    this.miFormulario.controls['percentage'].setValue(habilidad.percentage);
  }

  onEdit() {

    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    this.serviceHabilidades.editHabilidad(this.miFormulario.value).subscribe({
      next: (response) => {
        console.log(response);

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Se ctualizo con exito',
          showConfirmButton: true,

          timer: 150
        })
        window.location.reload();

      },
      error: (err) => {
        console.log(err);

      },
    });
  }

}
