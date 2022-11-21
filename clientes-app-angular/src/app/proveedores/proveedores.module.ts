import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaProveedorComponent } from './tabla-proveedor/tabla-proveedor.component';



@NgModule({
  declarations: [
    TablaProveedorComponent
  ],
  exports:[
    TablaProveedorComponent

  ],
  imports: [
    CommonModule
  ]
})
export class ProveedoresModule { }
