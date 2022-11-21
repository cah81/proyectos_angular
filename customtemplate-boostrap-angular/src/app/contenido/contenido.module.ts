import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { FormsModule } from '@angular/forms';
import { CarritoCompraComponent } from './carrito-compra/carrito-compra.component';
import { ClientesComponent } from './clientes/clientes.component';






@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ContactoComponent,
    NosotrosComponent,
    ServiciosComponent,
    LoginComponent,
    PrincipalComponent,
    CarritoCompraComponent,
    ClientesComponent,
    
   
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ContactoComponent,
    NosotrosComponent,
    ServiciosComponent,
    LoginComponent,
    CarritoCompraComponent,
    ClientesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class ContenidoModule { }
