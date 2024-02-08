import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { ProductFormComponent } from './component/product-form/product-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' }, // Redirige a 'main' cuando se accede a la raíz
  { path: 'main', component: MainComponent },
  { path: 'formulario', component: ProductFormComponent }
  // Otras rutas aquí
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

