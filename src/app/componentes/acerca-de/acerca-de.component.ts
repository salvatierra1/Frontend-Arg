import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Acerca } from 'src/app/modelo/acerca';
import { AuthService } from 'src/app/servicio/auth.service';
import { PortfolioAcercaService } from 'src/app/servicio/portfolio-acerca.service';
import { PortfolioPerfilService } from 'src/app/servicio/portfolio-perfil.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  miPortfolio: any;
  estaAuth: boolean = false;
  miFormulario: FormGroup;
  constructor(private formBuilder: FormBuilder, private perfilPortfolio: PortfolioPerfilService, private authService: AuthService, private serviceAcerca: PortfolioAcercaService) {

    this.miFormulario = this.formBuilder.group({
      id: new FormControl('', [

      ]),
      information: new FormControl('', [
        Validators.required,
      ])
    });
  }

  ngOnInit(): void {

    this.perfilPortfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio = data.aboutCollection;
    });
    this.estaAuth = this.authService.estaAuth;
  }


  editAcerca(acerca: Acerca) {
    console.log(acerca);
    this.miFormulario.controls['id'].setValue(acerca.id);
    this.miFormulario.controls['information'].setValue(acerca.information);

  }

  deleteAcerca(id: number): void {
    this.serviceAcerca.deleteAcerca(id).subscribe({
      next: () => {
        window.location.reload();
        alert("Delete con exito");
      }
    });
  }

  /*getters*/
  get id() {
    return this.miFormulario.get("id");
  }

  get information() {
    return this.miFormulario.get("information");
  }


  /* submit  */

  onEdit() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    this.serviceAcerca.editAcerca(this.miFormulario.value).subscribe({
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
