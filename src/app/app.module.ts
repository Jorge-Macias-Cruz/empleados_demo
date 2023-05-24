import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditEmpleadosComponent } from './edit-empleados/edit-empleados.component';
import { ListEmpleadosComponent } from './list-empleados/list-empleados.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormEmpleadosComponent } from './form-empleados/form-empleados.component';

@NgModule({
  declarations: [
    AppComponent,
    FormEmpleadosComponent,
    EditEmpleadosComponent,
    ListEmpleadosComponent,
    NavegacionComponent,
    FormEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
