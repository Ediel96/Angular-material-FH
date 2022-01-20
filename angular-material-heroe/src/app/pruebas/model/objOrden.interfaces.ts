export interface Orden {
  CONSECUTIVO: number,
  ORDEN: number,
  TIENDA: number,
  NOMBRE_TIENDA: string,
  PROVEEDOR: string,
  NOMBRE_PROVEEDOR: string,
  FECHA_CREA: string,
  USUARIO: string,
  PRODUCTO: Producto[]
}

export interface Producto {
  PLANTA: number,
  SKU: string,
  NOMBRE_SKU: string,
  CANTIDAD: number,
  COMENTARIO: string
}
