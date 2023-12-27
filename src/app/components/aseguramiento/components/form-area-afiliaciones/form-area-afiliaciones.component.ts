import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AseguramientoService } from '../../services/aseguramiento.service';
import { Afiliacion } from '../../interface/afiliacion.interface';

@Component({
  selector: 'app-form-area-afiliaciones',
  templateUrl: './form-area-afiliaciones.component.html',
  styleUrls: ['./form-area-afiliaciones.component.css']
})
export class FormAreaAfiliacionesComponent {


  public formAreaAfiliaciones: FormGroup = this.fb.group(
    {
      id: [0],
      fechaSgsss: ['', Validators.required],
      tipoAfiliacion: ['', Validators.required],
      numeroRadicacion: [0, Validators.required],
      fechaRadicacion: ['', Validators.required],
      observaciones: ['', Validators.required]
    }
  )

  constructor( private aseguramientoService: AseguramientoService, private fb: FormBuilder ){}

  get currentAfiliacion(): Afiliacion {
    const afiliacion = this.formAreaAfiliaciones.value as Afiliacion;
    return afiliacion;
  }

  onSave():void{
    console.log(this.formAreaAfiliaciones.value);
    this.aseguramientoService.crearAfiliacion( this.currentAfiliacion )
      .subscribe( afiliacion => {

      })
  }


}
