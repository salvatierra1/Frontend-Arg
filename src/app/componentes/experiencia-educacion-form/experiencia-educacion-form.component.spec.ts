import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaEducacionFormComponent } from './experiencia-educacion-form.component';

describe('ExperienciaEducacionFormComponent', () => {
  let component: ExperienciaEducacionFormComponent;
  let fixture: ComponentFixture<ExperienciaEducacionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaEducacionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaEducacionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
