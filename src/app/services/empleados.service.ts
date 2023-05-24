import { Injectable } from '@angular/core';
import { Empleados } from '../interfaces/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  empleados: Empleados[] = [];

  constructor() { }

  getEmpleados(){
    if(typeof Storage !== "undefined"){
      if(localStorage.length > 0){
        return localStorage.getItem("empleados");
      }else{
        return null;
      }
    }else{
      return 'LocalStorage no fue soportados por el navegador';
    }
  }

  addEmpleado(empleado:any){
    if(typeof Storage !== "undefined"){
      this.empleados = JSON.parse(this.getEmpleados()|| '[]');
      if(this.empleados === null){
        this.empleados = [];
      }
      this.empleados.push(empleado);
      localStorage.setItem("empleados", JSON.stringify(this.empleados))
    }else{
      return 'LocalStorage no fue soportados por el navegador';
    }

  }

}
