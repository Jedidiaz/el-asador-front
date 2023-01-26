export interface CartI{
  id:number;
  name:string;
  count:number;
  image:string;
  price:number;
  category:string;
}


export interface ResponseSucursalModel{
  response: string
  data: DataSucursalModel []
}

export interface DataSucursalModel {
  id: number
  nombre: string
  id_domicilio: number
  estado: number
  modified_at: string
}

export interface ResponseGenerateTokenModel {
  response: string
  data: DataGeneratorTokenModel
}

export interface DataGeneratorTokenModel{
  Ds_MerchantParameters: string
  Ds_Signature: string
  Ds_SignatureVersion: string

}