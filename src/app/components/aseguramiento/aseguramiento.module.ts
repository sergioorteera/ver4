import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AseguramientoRoutingModule } from '../../router/aseguramiento-routing.module';
import { AseguramientoComponent } from './aseguramiento.component';
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../menu/menu.component';
import { PruebaComponent } from './components/prueba/prueba.component';


@NgModule({
  declarations: [
    AseguramientoComponent,
    HeaderComponent,
    MenuComponent,
    PruebaComponent,
  ],
  imports: [
    CommonModule,
    AseguramientoRoutingModule
  ]
})
export class AseguramientoModule { }
