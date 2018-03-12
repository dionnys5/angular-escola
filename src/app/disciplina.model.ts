export class Disciplina {
  cod: number;
  nome: string;
  descricao: string;

  constructor(cod:number, nome: string, descricao?: string) {
    this.cod = cod;
    this.nome = nome;
    this.descricao = descricao;
  }
}
