import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-area-afiliaciones',
  templateUrl: './form-area-afiliaciones.component.html',
  styleUrls: ['./form-area-afiliaciones.component.css']
})
export class FormAreaAfiliacionesComponent {


  public formAreaAfiliaciones: FormGroup = this.fb.group(
    {
      fechaSgsss: ['', Validators.required],
      tipoAfiliacion: ['', Validators.required],
      numeroRadicacion: [0, Validators.required],
      fechaRadicacion: ['', Validators.required],
      observaciones: ['', Validators.required]
    }
  )

  constructor( private fb: FormBuilder ){}

  onSave():void{
    console.log(this.formAreaAfiliaciones.value);

  }


}
