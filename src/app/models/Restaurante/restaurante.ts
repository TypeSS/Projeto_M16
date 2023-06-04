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


