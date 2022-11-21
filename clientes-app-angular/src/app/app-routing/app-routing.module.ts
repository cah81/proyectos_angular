import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from '../clientes/contenido/contenido.component';
import { ContenidoProductosComponent } from '../productos/contenidoProductos/contenidoProductos.component';
import { DetalleComponent } from '../clientes/detalle/detalle.component';
import { FormComponent } from '../clientes/form/form.component';
import { TablaRegionComponent } from '../regiones/tabla-region/tabla-region.component';
import { FormProductosComponent } from '../productos/formProductos/formProductos.component';
import { DetalleProductosComponent } from '../productos/detalleProductos/detalleProductos.component';

const routes: Routes = [
 {
  path:'',
  redirectTo:'/clientes',
  pathMatch:'full'
 },
 {
  path:'clientes',
  component: ContenidoComponent
 },
 {
  path:'clientes/crear',
  component:FormComponent
 },
 {
  path:'clientes/editar/:id',
  component:FormComponent
 },
 {
  path:'clientes/ver/:id',
  component:DetalleComponent
 },
 {
  path:'clientes/regiones',
  component:TablaRegionComponent
 },

 
 {
  path:'productos',
  component: ContenidoProductosComponent
 },
 {
  path:'productos/crear',
  component:FormProductosComponent
 },
 {
  path:'productos/editar/:id',
  component:FormProductosComponent
 },
 {
  path:'productos/ver/:id',
  component:DetalleProductosComponent
 },
 {
  path:'productos/regiones',
  component:TablaRegionComponent
 },









 {
  path:'**',
  redirectTo:''
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
