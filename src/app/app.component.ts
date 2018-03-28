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
  cod = -1;
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
      const edit = this.getDisciplinas();
      const i = edit.indexOf(this.editando);
      console.log(i);
      /*
            edit[i].cod = this.cod;
      edit[i].nome = this.nome;
      edit[i].tipo = this.tipo;
      edit[i].data = this.data;
      edit[i].status = this.status;
      edit[i].descricao = this.descricao;
      edit[i].periodo = this.periodo;
       */

      this.setLocal(edit);
      this.cancelar();
    } else {
        const disciplinas = this.getDisciplinas();
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
        const disciplinas = this.getDisciplinas();
        const i = this.disciplinas.indexOf(disciplina);
        disciplinas.splice(i, 1);
        this.disciplinas = disciplinas;
        this.setLocal(disciplinas);
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
    console.log(this.editando);
  }

  cancelar() {
    this.cod = null;
    this.nome = null;
    this.tipo = null;
    this.data = null;
    this.status = null;
    this.periodo = '';
    this.descricao = null;
  }

  getDisciplinas() {
    const localStorageItem = JSON.parse(localStorage.getItem('disciplinas'));
    if (localStorageItem == null) {
      return [];
    } else {
      return localStorageItem.disciplinas;
    }

  }

  setLocal(disciplinas) {
    localStorage.setItem('disciplinas', JSON.stringify({disciplinas}));
  }

}
