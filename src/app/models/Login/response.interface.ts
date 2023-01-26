export interface ResponseI{
  response: string;
  data: dataModel
  error: string
  token: string
}

export interface dataModel {
  name: string
  role: string

}
