export interface Users {
  find(arg0: (a: any) => boolean): unknown;
  id_utilizador:number;
  nome: string;
  email: string;
  telefone: number;
  morada: string;
  password: string;
  codPostal: string;
}
