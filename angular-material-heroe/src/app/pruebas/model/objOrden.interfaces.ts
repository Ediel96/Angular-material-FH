export class Orden {
  CONSECUTIVO: number;
  ORDEN: number;
  TIENDA: number;
  NOMBRE_TIENDA: string;
  PROVEEDOR: string;
  NOMBRE_PROVEEDOR: string;
  FECHA_CREA: string;
  USUARIO: string;
  PRODUCTO: Array<Product>

  public constructor(){
    this.CONSECUTIVO = 0,
    this.ORDEN = 0,
    this.TIENDA = 0,
    this.NOMBRE_TIENDA = '',
    this.PROVEEDOR = '',
    this.NOMBRE_PROVEEDOR = '',
    this.FECHA_CREA = '',
    this.USUARIO = '',
    this.PRODUCTO = []
  }
}

export class Product {
  PLANTA: number;
  SKU: string;
  NOMBRE_SKU: string;
  CANTIDAD: number;
  COMENTARIO: string

  public constructor(){
    this.PLANTA = 0;
    this.SKU = '';
    this.NOMBRE_SKU = '',
    this.CANTIDAD = 0,
    this.COMENTARIO = ''
  }

}


export class Result {

  CONSECUTIVO: number;
  ORDEN: number;
  TIENDA: number;
  NOMBRE_TIENDA: string;
  PROVEEDOR: string;
  NOMBRE_PROVEEDOR: string;
  FECHA_CREA: string;
  USUARIO: string;
  PLANTA: number;
  SKU: string;
  NOMBRE_SKU: string;
  CANTIDAD: number;
  COMENTARIO: string;

  public constructor(){
    this.CONSECUTIVO = 0;
    this.ORDEN = 0;
    this.TIENDA = 0;
    this.NOMBRE_TIENDA = '';
    this.PROVEEDOR = '';
    this.NOMBRE_PROVEEDOR = '';
    this.FECHA_CREA = '';
    this.USUARIO = '';
    this.PLANTA = 0;
    this.SKU = '';
    this.NOMBRE_SKU = '';
    this.CANTIDAD = 0;
    this.COMENTARIO = '';
  }

}
