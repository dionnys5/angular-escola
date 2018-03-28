import {Component} from '@angular/core';
import {Disciplina} from './disciplina.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  incluir = null;
  editando = null;
  cod = null;
  nome = null;
  tipo = 'primaria';
  data = null;
  status = false;
  periodos = [1, 2, 3, 4, 5, 6, 7, 8];
  periodo = '';
  descricao = null;
  disciplinas = this.getDisciplinas();

  salvar() {
    if (this.editando) {
      const edit = this.disciplinas;
      const i = edit.indexOf(this.editando);
      edit[i].cod = this.cod;
      edit[i].nome = this.nome;
      edit[i].tipo = this.tipo;
      edit[i].data = this.data;
      edit[i].status = this.status;
      edit[i].descricao = this.descricao;
      edit[i].periodo = this.periodo;
      this.setLocal(edit);
    } else {
      const d = new Disciplina(this.cod, this.nome, this.tipo, this.data,
                              this.status, this.periodo, this.descricao);
      this.disciplinas.push(d);
      this.setLocal(this.disciplinas);
    }
    this.cancelar();
  }

  excluir(disciplina) {
    if (this.editando === disciplina) {
      alert('Você não pode excluir uma disciplina que está editando');
    } else {
      if (confirm('Tem certeza que deseja excluir a disciplina "'
          + disciplina.nome + '"?')) {
        const i = this.disciplinas.indexOf(disciplina);
        this.disciplinas.splice(i, 1);
        this.setLocal(this.disciplinas);
      }
    }
  }

  editar(disciplina) {
    this.cod = disciplina.cod;
    this.nome = disciplina.nome;
    this.tipo = disciplina.tipo;
    this.data = disciplina.data;
    this.status = disciplina.status;
    this.periodo = disciplina.periodo;
    this.descricao = disciplina.descricao;
    this.editando = disciplina;
    this.incluir = true;
  }

  cancelar() {
    this.cod = null;
    this.nome = null;
    this.tipo = 'primaria';
    this.data = null;
    this.status = null;
    this.periodo = '';
    this.descricao = null;
    this.incluir = null;
    this.editando = null;
  }

  insert() {
    if (this.incluir){
        alert('Preencha os dados e clique salvar');
    } else {
        this.incluir = true;
    }
  }

  getDisciplinas() {
    const localStorageDisciplinas = JSON.parse(localStorage.getItem('disciplinas'));
    if (localStorageDisciplinas == null) {
      return [];
    } else {
      return localStorageDisciplinas.disciplinas;
    }

  }

  setLocal(disciplinas) {
    localStorage.setItem('disciplinas', JSON.stringify({disciplinas}));
  }

}
