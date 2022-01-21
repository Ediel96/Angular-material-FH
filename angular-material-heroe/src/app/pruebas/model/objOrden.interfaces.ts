export interface Orden {
  CONSECUTIVO: number,
  ORDEN: number,
  TIENDA: number,
  NOMBRE_TIENDA: string,
  PROVEEDOR: string,
  NOMBRE_PROVEEDOR: string,
  FECHA_CREA: string,
  USUARIO: string,
  PRODUCTO: Array<Product>
}

export interface Product {
  PLANTA: number,
  SKU: string,
  NOMBRE_SKU: string,
  CANTIDAD: number,
  COMENTARIO: string 
}


export interface Result {
  CONSECUTIVO: number,
  ORDEN: number,
  TIENDA: number,
  NOMBRE_TIENDA: string,
  PROVEEDOR: string,
  NOMBRE_PROVEEDOR: string,
  FECHA_CREA: string,
  USUARIO: string,
  PLANTA: number,
  SKU: string,
  NOMBRE_SKU: string,
  CANTIDAD: number,
  COMENTARIO: string
}