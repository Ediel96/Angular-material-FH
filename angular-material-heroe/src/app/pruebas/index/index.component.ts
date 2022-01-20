import { Component, OnInit } from '@angular/core';
import { PruebaService } from '../services/prueba.service';
import {Orden , Producto} from '../model/objOrden.interfaces';


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
  // producto : Producto ;

  ngOnInit(): void {

    let hash = {};



    this.pruebaServ.getHeores().subscribe(
        (res) => {
          this.orden = res;

          console.log(this.orden)

          this.orden.filter((res, i )=> {

            if(this.ordenActual.length == 0){
              this.ordenActual.push(res);
            }else{
              console.log('contador :', i);
              // this.ordenActual = this.ordenActual.filter(res => this.orden[i].ORDEN != res.ORDEN);
              for(let j = 0; j < this.ordenActual.length; j++){
                if(this.ordenActual[j].ORDEN != this.orden[i].ORDEN){
                  this.ordenActual.push(res);
                }
              }
            }

          })
          console.log(this.ordenActual);
    });

  }

}
