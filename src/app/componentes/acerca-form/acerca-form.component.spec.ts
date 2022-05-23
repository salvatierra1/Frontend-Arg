import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaFormComponent } from './acerca-form.component';

describe('AcercaFormComponent', () => {
  let component: AcercaFormComponent;
  let fixture: ComponentFixture<AcercaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
