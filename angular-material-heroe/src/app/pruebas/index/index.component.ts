import { Component, OnInit } from '@angular/core';
import { PruebaService } from '../services/prueba.service';
import { Orden, Product, Result } from '../model/objOrden.interfaces';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor( private pruebaServ : PruebaService) { }

  orden : Orden[] = [];
  ordenActual : Orden[] = [];
  listado :Orden[] = []
  resultList : Result[] = [];
  result : Result[] =[];
  
  // producto : Producto ;

  ngOnInit(): void {

    let hash = {};



    this.pruebaServ.getHeores().subscribe(
        (res) => {
          // this.orden = res;
          this.resultList = res;

          console.log(this.orden)

          this.resultList.filter((res, i )=> {

            if(this.ordenActual.length == 0){
              
              this.ordenActual[0].CONSECUTIVO;
              this.ordenActual[0].ORDEN;
              this.ordenActual[0].TIENDA;
              this.ordenActual[0].NOMBRE_TIENDA;
              this.ordenActual[0].PROVEEDOR;
              this.ordenActual[0].NOMBRE_PROVEEDOR;
              this.ordenActual[0].FECHA_CREA;
              this.ordenActual[0].USUARIO;
              this.ordenActual[0].PRODUCTO;

              const product = this.orden.filter(result => res.ORDEN == result.ORDEN);
              console.log('product: ', product);
              this.ordenActual[0]. = product[0];

            }else{
              console.log('contador :', i);

              for(let j = 0; j < this.ordenActual.length; j++){
                if(this.ordenActual[j].ORDEN != this.orden[i].ORDEN){
                  this.ordenActual.push(res);
                }
              }
            }

          }
          )
          console.log(this.ordenActual);
    });

  }


  returnListproduct(pruducto : Product, listProduct : Result[], posicio : number):Product {
    // const resultProduct = [];
    let resulProduct = pruducto;

    listProduct.filter((result, i) =>{
      resulProduct.PLANTA = result.PLANTA;
      resulProduct.SKU = result.SKU;
      resulProduct.NOMBRE_SKU = result.NOMBRE_SKU;
      resulProduct.CANTIDAD = result.CANTIDAD;
      resulProduct.COMENTARIO = result.COMENTARIO;
    })
    
    return resulProduct ;
  }

}
