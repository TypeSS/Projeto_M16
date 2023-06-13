export interface Produtos {
  nomeproduto: string;
  descricao: string;
  preco: number;
  categoria: string;
  url_imagem: string;
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
