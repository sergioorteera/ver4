import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Routes
import { AseguramientoRoutingModule } from './router/aseguramiento-routing.module';
import { AppRoutingModule } from './router/app-routing.module';

//components
import { AppComponent } from './app.component';
import { InternalErrorComponent } from './components/error-page/internal-error/internal-error.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    InternalErrorComponent,

  ],
  imports: [
    //@Angular
    HttpClientModule,

    //@Router
    BrowserModule,
    AppRoutingModule,
    AseguramientoRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
