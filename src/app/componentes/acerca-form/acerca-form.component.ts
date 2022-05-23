import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PortfolioAcercaService } from 'src/app/servicio/portfolio-acerca.service';

@Component({
  selector: 'app-acerca-form',
  templateUrl: './acerca-form.component.html',
  styleUrls: ['./acerca-form.component.css']
})
export class AcercaFormComponent implements OnInit {

  miFormulario: FormGroup;
  constructor(private formBuilder: FormBuilder, private serviceAcerca: PortfolioAcercaService) { }

  ngOnInit(): void {
    this.miFormulario = this.formBuilder.group({
      information: new FormControl('', [
        Validators.required,
      ])
    });
  }

  /*getters*/

  get information() {
    return this.miFormulario.get("information");
  }


  /* submit  */

  onSubmit() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    this.serviceAcerca.addAcerca(this.miFormulario.value).subscribe({
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
