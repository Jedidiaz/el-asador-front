export interface ProductI {
  id: number;
  codigo_articulo: string;
  descripcion_corta: string;
  descripcion: string;
  importe_neto_unitario: string;
  porcentaje_iva: string;
  importe_iva: string;
  tipo: string;
  grupo: string;
  familia: string;
  es_compuesto: number;
  foto_carrito: string;
  es_carrusel: number;
  foto_carrusel: string;
  es_promocion: number;
  foto_promocion: string;
  modified_at: string;
}
