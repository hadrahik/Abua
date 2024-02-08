import { Component } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  constructor() {}

  enviarFormulario(formulario: any): void {
    // Aquí puedes agregar la lógica para procesar el formulario
    // Por ejemplo, puedes imprimir los valores del formulario en la consola
    console.log(formulario.value);
  }
}





