export interface Produtos {
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
  nomeproduto:string;
  preco:number;
  categoria:string;
  ocasiao: string;
}

export interface ProdEnc{
  nomeproduto:string;
  preco:number;
  quantidade:number;
}

