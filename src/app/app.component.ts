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
  tipo = null;
  data = null;
  status = false;
  periodos = [1,2,3,4,5,6,7,8]
  periodo = null;
  descricao = null;
  disciplinas = this.getDisciplinas();

  salvar() {
    if (this.editando) {
      this.editando.cod = this.cod;
      this.editando.nome = this.nome;
      this.editando.tipo = this.tipo;
      this.editando.data = this.data;
      this.editando.status = this.status;
      this.editando.descricao = this.descricao;
      this.cancelar();
    } else {
      let disciplinas = this.getDisciplinas();
      const d = new Disciplina(this.cod, this.nome, this.tipo,this.data, 
                              this.status,this.periodo, this.descricao);
      this.disciplinas.push(d);
      this.setLocal(this.disciplinas);
    }
    this.cancelar();
  }

  excluir(disciplina) {
    if (this.editando == disciplina) {
      alert('Você não pode excluir uma disciplina que está editando');
    } else {
      if (confirm('Tem certeza que deseja excluir a disciplina "'
          + disciplina.nome + '"?')) {
        let disciplinas = this.getDisciplinas();
        const i = this.disciplinas.indexOf(disciplina);
        disciplinas.splice(i, 1);
        this.disciplinas = disciplinas
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
    this.periodo = this.periodos.indexOf(disciplina.periodo);
    this.descricao = disciplina.descricao;
    this.editando = disciplina;
  }

  cancelar() {
    this.cod = null;
    this.nome = null;
    this.tipo = null;
    this.data = null; 
    this.status = null;
    this.periodo = this.periodos[0];
    this.descricao = null;
  }

  getDisciplinas(){
    let localStorageItem = JSON.parse(localStorage.getItem('disciplinas'))
    if (localStorageItem == null) {
      return []
    } else {
      return localStorageItem.disciplinas;
    }
    
  }

  setLocal(disciplinas) {
    localStorage.setItem('disciplinas', JSON.stringify({disciplinas}));
  }

}
