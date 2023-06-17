export interface Produtos {
  id_produto:number;
  nomeproduto: string;
  descricao: string;
  preco: number;
  categoria: string;
  imagem: string;
}

export interface Ocasioes{
  id_ocasiao:number,
  ocasiao:string,
  descricao:string;
}

export interface PratoDoDia{
  id_produto:number;
  nomeproduto:string;
  preco:number;
  categoria:string;
  imagem:string;
  ocasiao: string;
}

export interface Encomenda{
  id_utilizador:number;
  id_restaurante:number;
  tipoEnc:string;
  estado:string;
  precototal:number;
}

export interface ProdEnc{
  id_produto:number;
  nomeproduto:string;
  preco:number;
  quantidade:number;
}

