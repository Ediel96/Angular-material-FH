import { Component, OnInit } from '@angular/core';
import { PruebaService } from '../services/prueba.service';
import { Orden, Product, Result } from '../model/objOrden.interfaces';
import { NgTemplateOutlet } from '@angular/common';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor( private pruebaServ : PruebaService) { }

  ordenActual : Orden[] = [];
  listado :Orden[] = []
  resultList : Result[] = [];
  result : Result[] =[];
  returnProduct : Product[] =[];


  orden : Orden = new Orden();
  product : Product = new Product();



  // producto : Producto ;

  ngOnInit(): void {

    this.pruebaServ.getHeores().subscribe(
        (res) => {
          // this.orden = res;

          let resultado = [];
          let resultadoOrden  = res;
          let ordenesUnicass = []

          let orden = {
            CONSECUTIVO : null,
            ORDEN : null,
            TIENDA : '',
            NOMBRE_TIENDA : '',
            PROVEEDOR :'',
            NOMBRE_PROVEEDOR :'',
            FECHA_CREA:'',
            USUARIO:'',
            PRODUCTO:[{PLANTA : null  , SKU: '', NOMBRE_SKU:'' , CANTIDAD: null, COMENTARIO:''}]
          }

          let producto = {PLANTA : null  , SKU: '', NOMBRE_SKU:'' , CANTIDAD: null, COMENTARIO:''}

          let listaPorducto = [];

          let ordenString = 0;
          resultadoOrden.forEach((res, i ) => {
            if(ordenString != res.ORDEN){
              ordenString = res.ORDEN;
              ordenesUnicass.push(res)
            }
          });

          // console.log('ordenesUnicas', ordenesUnicass)

          for (let i = 0; i < ordenesUnicass.length; i++){

            if(resultado.length == 0){

            }
              const {CONSECUTIVO, ORDEN, TIENDA , NOMBRE_TIENDA, PROVEEDOR , NOMBRE_PROVEEDOR, FECHA_CREA, USUARIO} = resultadoOrden[0];

              orden.CONSECUTIVO = CONSECUTIVO;
              orden.ORDEN = ORDEN;
              orden.TIENDA = TIENDA;
              orden.NOMBRE_TIENDA = NOMBRE_TIENDA;;
              orden.PROVEEDOR = PROVEEDOR;;
              orden.NOMBRE_PROVEEDOR = NOMBRE_PROVEEDOR;;
              orden.FECHA_CREA = FECHA_CREA;;
              orden.USUARIO = USUARIO;

              resultado.push(orden);

              let productofiltrar = resultadoOrden.filter(res => orden.ORDEN == res.ORDEN);
              for (let i2 = 0; i2 < productofiltrar.length; i2++){

                producto = {PLANTA : null  , SKU: '', NOMBRE_SKU:'' , CANTIDAD: null, COMENTARIO:''}

                let {PLANTA, SKU, NOMBRE_SKU , CANTIDAD, COMENTARIO } = resultadoOrden[i2];

                producto.PLANTA = PLANTA;
                producto.SKU = SKU;
                producto.NOMBRE_SKU = NOMBRE_SKU;
                producto.CANTIDAD = CANTIDAD;
                producto.COMENTARIO = COMENTARIO;

                listaPorducto.push(producto);

              }
              resultado[i].PRODUCTO = listaPorducto;


          }

          console.log(resultado);

          // console.log(this.orden);

        /*
          this.resultList.map((res, i )=> {

            if(this.ordenActual.length == 0){
              let ordenActual : Orden = new Orden();

              console.log('CONSECUTIVO: ',res);

              this.orden.CONSECUTIVO = res.CONSECUTIVO;
              this.orden.ORDEN = res.ORDEN;;
              this.orden.TIENDA = res.TIENDA;;
              this.orden.NOMBRE_TIENDA = res.NOMBRE_TIENDA;;
              this.orden.PROVEEDOR = res.PROVEEDOR;;
              this.orden.NOMBRE_PROVEEDOR = res.NOMBRE_PROVEEDOR;;
              this.orden.FECHA_CREA = res.FECHA_CREA;;
              this.orden.USUARIO = res.USUARIO;

              this.orden = resultadoOrden[0];

              console.log('ordenActual:', ordenActual);
              // this.orden.push(this.orden)


              // this.ordenActual[0].PRODUCTO;

              // const product = this.orden.filter(result => {
              //   res.ORDEN == result.ORDEN
              // });

              this.ordenActual[0].PRODUCTO = this.returnListproduct(this.returnProduct ,this.resultList);

            }else{
              console.log('contador :', i);

              for(let j = 0; j < this.ordenActual.length; j++){
                // if(this.ordenActual[j].ORDEN != this.orden[i].ORDEN){
                //   // this.ordenActual.push(res);
                // }
              }
            }
          }
          )
          */

    });

  }


  returnListproduct(pruducto : Product[], listProduct : Result[]):Product[] {
    // const resultProduct = [];
    let resulProduct = pruducto;


    listProduct.filter((result, i) =>{
      resulProduct[i].PLANTA = result.PLANTA;
      resulProduct[i].SKU = result.SKU;
      resulProduct[i].NOMBRE_SKU = result.NOMBRE_SKU;
      resulProduct[i].CANTIDAD = result.CANTIDAD;
      resulProduct[i].COMENTARIO = result.COMENTARIO;
    })

    return resulProduct ;
  }

}
