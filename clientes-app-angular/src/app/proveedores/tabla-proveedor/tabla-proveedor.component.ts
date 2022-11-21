import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/productos/interface/proveedor';
import { ProductosService } from 'src/app/productos/productos.service';

@Component({
  selector: 'app-tabla-proveedor',
  templateUrl: './tabla-proveedor.component.html',
  styleUrls: ['./tabla-proveedor.component.css']
})
export class TablaProveedorComponent implements OnInit {

  proveedores:Proveedor[]=[];

  constructor(private servicio:ProductosService) { }

  ngOnInit(): void {

    this.servicio.getProvedores().subscribe(
      (resp) =>{
        this.proveedores=resp
      },
      (err) =>{
        console.log(err);
      }
    )
  }

}
