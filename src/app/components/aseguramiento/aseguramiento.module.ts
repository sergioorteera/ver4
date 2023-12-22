import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AseguramientoRoutingModule } from '../../router/aseguramiento-routing.module';
import { AseguramientoComponent } from './aseguramiento.component';
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../menu/menu.component';
import { FormAreaAfiliacionesComponent } from './components/form-area-afiliaciones/form-area-afiliaciones.component';
import { FormCotizanteComponent } from './components/form-cotizante/form-cotizante.component';
import { FormEmpleadorComponent } from './components/form-empleador/form-empleador.component';
import { FormGrupoFamiliarComponent } from './components/form-grupo-familiar/form-grupo-familiar.component';
import { SolicitudAfiliacionPageComponent } from './components/solicitud-afiliacion-page/solicitud-afiliacion-page.component';



@NgModule({
  declarations: [
    AseguramientoComponent,
    HeaderComponent,
    MenuComponent,
    FormAreaAfiliacionesComponent,
    FormCotizanteComponent,
    FormEmpleadorComponent,
    FormGrupoFamiliarComponent,
    SolicitudAfiliacionPageComponent,
  ],
  imports: [
    CommonModule,
    AseguramientoRoutingModule
  ]
})
export class AseguramientoModule { }
