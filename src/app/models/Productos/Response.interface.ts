import { ProductI } from 'src/app/models/Productos/Products.interface'

export interface ResponseGET {
  response: string;
  data: ProductI[];
}
