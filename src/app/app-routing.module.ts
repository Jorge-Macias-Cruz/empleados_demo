import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmpleadosComponent } from './list-empleados/list-empleados.component';

const routes: Routes = [
  {path: '', component: ListEmpleadosComponent},
  {path: 'personas', component: ListEmpleadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
