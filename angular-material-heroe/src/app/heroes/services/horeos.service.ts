import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interface/heroe.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoreosService {

  constructor( private http :HttpClient) { }

  getHeores():Observable<Heroe[]>{
    return  this.http.get<Heroe[]>('http://localhost:3000/heroes');
  }
}
