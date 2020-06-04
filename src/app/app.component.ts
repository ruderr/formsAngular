import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formularios';

  formulario: FormGroup;

  constructor( private frmBuilder: FormBuilder ) {

    this.formulario = this.frmBuilder.group( {
      nombre: [ 'nombre por defecto', Validators.required],
      apellido: [ 'apellido por defecto', Validators.required],
      email: [ 'prueba@gmail.com', [Validators.required, Validators.pattern("[^ @]*@[^ @]*") ]]
    });

  }

  onSubmit(parametro){

    console.log(parametro);

  }
}
