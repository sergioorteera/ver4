import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternalErrorComponent } from '../components/error-page/internal-error/internal-error.component';

const routes: Routes = [
  { path: '', redirectTo: 'aseguramiento', pathMatch: "full" },
  { path: 'aseguramiento', loadChildren: () => import('../components/aseguramiento/aseguramiento.module').then(m => m.AseguramientoModule) },
  { path: 'error', component: InternalErrorComponent },
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
