import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AseguramientoComponent } from '../components/aseguramiento/aseguramiento.component';
import { FormAreaAfiliacionesComponent } from '../components/aseguramiento/components/form-area-afiliaciones/form-area-afiliaciones.component';
import { FormCotizanteComponent } from '../components/aseguramiento/components/form-cotizante/form-cotizante.component';
import { FormEmpleadorComponent } from '../components/aseguramiento/components/form-empleador/form-empleador.component';
import { FormGrupoFamiliarComponent } from '../components/aseguramiento/components/form-grupo-familiar/form-grupo-familiar.component';


const routes: Routes = [
  {
    path: '', component: AseguramientoComponent,
    children:[
      { path: 'form-area-afiliaciones', component: FormAreaAfiliacionesComponent },
      { path: 'form-cotizante', component: FormCotizanteComponent },
      { path: 'form-empleador', component: FormEmpleadorComponent },
      { path: 'form-grupo-familiar', component: FormGrupoFamiliarComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AseguramientoRoutingModule { }
