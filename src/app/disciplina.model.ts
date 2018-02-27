import { Professor } from "./professor.model";

export class Disciplina {
  cod: number;
  nome: string;
  descricao: string;
  professor: Professor;

  constructor(cod: number, nome: string, professor:Professor, descricao?: string) {
    this.cod = cod;
    this.professor = professor;
    this.nome = nome;
    this.descricao = descricao;
  }
}
