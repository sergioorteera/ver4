import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AseguramientoComponent } from '../components/aseguramiento/aseguramiento.component';
import { PruebaComponent } from '../components/aseguramiento/components/prueba/prueba.component';

const routes: Routes = [
  {
    path: '', component: AseguramientoComponent,
    children:[
      { path: 'prueba', component: PruebaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AseguramientoRoutingModule { }
