import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-area-afiliaciones',
  templateUrl: './form-area-afiliaciones.component.html',
  styleUrls: ['./form-area-afiliaciones.component.css']
})
export class FormAreaAfiliacionesComponent {


  public formAreaAfiliaciones: FormGroup = this.fb.group(
    {
      fechaSgsss: [''],
      tipoAfiliacion: [''],
      numeroRadicacion: [0],
      fechaRadicacion: [''],
      observaciones: ['']
    }
  )

  constructor( private fb: FormBuilder ){}

  onSave():void{
    console.log(this.formAreaAfiliaciones.value);

  }


}
