export class Disciplina {
  cod: number;
  nome: string;
  descricao: string;
  tipo: string;
  data: string;
  status: boolean;
  periodo:number;
  constructor(cod:number, nome: string, tipo:string, data: string,
     status: boolean, periodo:number, descricao?: string) {
    this.cod = cod;
    this.nome = nome;
    this.tipo = tipo;
    this.data = data;
    this.status = status;
    this.periodo = periodo;
    this.descricao = descricao;
  }
}
