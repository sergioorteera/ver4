import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AseguramientoRoutingModule } from '../../router/aseguramiento-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AseguramientoComponent } from './aseguramiento.component';
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../menu/menu.component';
import { FormAreaAfiliacionesComponent } from './components/form-area-afiliaciones/form-area-afiliaciones.component';
import { FormCotizanteComponent } from './components/form-cotizante/form-cotizante.component';
import { FormEmpleadorComponent } from './components/form-empleador/form-empleador.component';
import { FormGrupoFamiliarComponent } from './components/form-grupo-familiar/form-grupo-familiar.component';




@NgModule({
  declarations: [
    AseguramientoComponent,
    HeaderComponent,
    MenuComponent,
    FormAreaAfiliacionesComponent,
    FormCotizanteComponent,
    FormEmpleadorComponent,
    FormGrupoFamiliarComponent,
  ],
  imports: [
    CommonModule,
    AseguramientoRoutingModule,
    ReactiveFormsModule
  ]
})
export class AseguramientoModule { }
