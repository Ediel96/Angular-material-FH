import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interface/heroe.interface'

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe:Heroe): string {

    //assets/heroes/dc-batman.jpg
    return `assets/heroes/${heroe.id}.jpg`;
  }

}
