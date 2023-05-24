import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmpleadosComponent } from './form-empleados.component';

describe('FormEmpleadosComponent', () => {
  let component: FormEmpleadosComponent;
  let fixture: ComponentFixture<FormEmpleadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEmpleadosComponent]
    });
    fixture = TestBed.createComponent(FormEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
