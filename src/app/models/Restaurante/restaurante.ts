export interface Reserva {
  id_utilizador: number;
  id_restaurante: number;
  data:string;
  horas:string;
  nPessoas: number
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


