import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../services/empleados.service';
import {Empleados} from '../interfaces/empleados';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent implements OnInit {
  
  empleadosI: Empleados [];
  showhide: boolean= true;

  constructor(private empleadoService: EmpleadosService){
  this.empleadosI = [];
  }

  ngOnInit(): void {
    this.listEmpleados();
  }

  listEmpleados(){
    this.empleadosI = JSON.parse(this.empleadoService.getEmpleados() || '{}' );
    if(this.empleadosI !== null){
      this.showhide = true;
    }else {
      this.showhide= false;
    }
  }

  mostrarEmpleados(empleados:any){
    this.empleadosI=empleados;
    if(this.empleadosI !== null){
      this.showhide=true;
    }else{
      this.showhide= false;
    }

  }
}
