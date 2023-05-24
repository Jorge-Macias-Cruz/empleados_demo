import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import { Empleados } from '../interfaces/empleados';
import { EmpleadosService } from '../services/empleados.service';

@Component({
  selector: 'app-form-empleados',
  templateUrl: './form-empleados.component.html',
  styleUrls: ['./form-empleados.component.css']
})
export class FormEmpleadosComponent implements OnInit {
  formEmpleado : FormGroup;
  submit =false;
  empleados: Empleados[];
  @Output() mostrar = new EventEmitter<Empleados[]>();

  constructor(private fb: FormBuilder,
    private empleadoService: EmpleadosService){
    this.formEmpleado = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fechaNacimiento: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
//Recupero las intancias

get id(){
  return this.formEmpleado.get('id');
}
get nombre(){
  return this.formEmpleado.get('nombre');
}
get apellido(){
  return this.formEmpleado.get('apellido');
}
get fechaNacimiento(){
  return this.formEmpleado.get('fechaNacimiento');
}

saveEmpleado(){
  this.submit=true;
  if(this.formEmpleado.invalid){
    return;
  }
  this.empleadoService.addEmpleado(this.formEmpleado.value);
  this.empleados = JSON.parse(this.empleadoService.getEmpleados()|| '[]');
  this.mostrar.emit(this.empleados);
  console.log(this.formEmpleado.value);
  this.clean();
}
clean(){
  this.submit=false;
  this.formEmpleado.reset();
}


}
