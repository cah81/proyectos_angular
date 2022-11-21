import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoCompraComponent } from '../contenido/carrito-compra/carrito-compra.component';
import { ContactoComponent } from '../contenido/contacto/contacto.component';
import { InicioComponent } from '../contenido/inicio/inicio.component';
import { LoginComponent } from '../contenido/login/login.component';
import { NosotrosComponent } from '../contenido/nosotros/nosotros.component';
import { ServiciosComponent } from '../contenido/servicios/servicios.component';

const routes: Routes = [

  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'inicio',
    component:InicioComponent
  },
  {
    path:'contacto',
    component:ContactoComponent
  },
  {
    path:'nosotros',
    component:NosotrosComponent
  },
  {
    path:'servicios',
    component:ServiciosComponent
  },
  {
    path:'login',
    component:LoginComponent
  },

  {
    path:'carrito',
    component:CarritoCompraComponent
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
