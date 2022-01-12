import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interface/heroe.interface';
import {HoreosService} from '../../services/horeos.service'

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
    mat-card{
      margin-top : 20px;
    }
  `]
})
export class ListadoComponent implements OnInit {

  public heroes :  Heroe[] = [];

  constructor(private heroeServices :  HoreosService) { }

  ngOnInit(): void {
    this.heroeServices.getHeores().subscribe(resp =>  {this.heroes = resp , console.log(resp)});
  }

}
