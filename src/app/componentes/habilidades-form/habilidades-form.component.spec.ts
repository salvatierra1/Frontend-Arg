import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesFormComponent } from './habilidades-form.component';

describe('HabilidadesFormComponent', () => {
  let component: HabilidadesFormComponent;
  let fixture: ComponentFixture<HabilidadesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HabilidadesFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidadesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
