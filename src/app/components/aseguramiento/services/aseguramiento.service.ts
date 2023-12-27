import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Afiliacion } from '../interface/afiliacion.interface';
import { environments } from 'src/environments/environments';


@Injectable({providedIn: 'root'})
export class AseguramientoService {

  private baseUrl: string  = environments.baseUrl;

  constructor(private http: HttpClient) { }


  crearAfiliacion( afiliacion: Afiliacion ): Observable<Afiliacion> {
    return this.http.post<Afiliacion> (`${this.baseUrl}/afiliacion`, afiliacion);
  }


}
