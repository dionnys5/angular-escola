export class Disciplina {
  cod: number;
  nome: string;
  descricao: string;
  tipo: string;
  data: string;
  status: boolean;
  periodo:string;
  constructor(cod:number, nome: string, tipo:string, data?: string,
     status?: boolean, periodo?:string, descricao?: string) {
    this.cod = cod;
    this.nome = nome;
    this.tipo = tipo;
    this.data = data;
    this.status = status;
    this.periodo = periodo;
    this.descricao = descricao;
  }
}
