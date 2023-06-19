export interface Reserva {
  id_restaurante: number;
  id_utilizador: number;
  data:string;
  horas:string;
  observacoes:string;
  nPessoas: number;
}

export interface Restaurante {
  id_restaurante:number;
  localidade:string;
  telefone:number;
  nome_restaurante: string;
  morada: string;
}

export interface Categoria {
  id_categoria: number;
  categoria: string;
}

export interface ResCli{
  id_restaurante: any;
  nome:string;
  nome_restaurante:string;
  data:string;
  horas:string;
  nPessoas:number;
  sitaucao:string;
  observacoes:string;
}

export interface Encomendas{
  id_encomenda:number;
  nome:string;
  nome_restaurante:string;
  precototal:number;
  tipoEnc:string;
  estado:string;
}

export interface ProdEnc{
  id_encomenda:number;
  nomeproduto:string;
  quant:string;
  preco:number;
}


