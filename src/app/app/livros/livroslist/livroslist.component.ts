import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Livro } from '../livro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {

  lista: Livro [] = [];

  livroSelecionadaParaEdicao: Livro = new Livro();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  livroService = inject(LivroService);
  

  constructor(){

    this.listAll();
  
}




abrirModal(abc : any){
  this.modalService.open(abc, {size: 'lg'});
}

addNaLista(livro: Livro){

  this.lista.push(livro);
  this.modalService.dismissAll();

}

listAll() {

  this.livroService.listAll().subscribe({
    next: lista => { // QUANDO DÁ CERTO
      this.lista = lista;
    },
    error: erro => { // QUANDO DÁ ERRO
      alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
      console.error(erro);
    }
  });

}

exemploErro() {

  this.livroService.exemploErro().subscribe({
    next: lista => { // QUANDO DÁ CERTO
      this.lista = lista;
    },
    error: erro => { // QUANDO DÁ ERRO
      alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
      console.error(erro);
    }
  });

}


adicionar(modal: any) {
  this.livroSelecionadaParaEdicao = new Livro();

  this.modalService.open(modal, { size: 'sm' });
}

editar(modal: any, livro: Livro, indice: number) {
  this.livroSelecionadaParaEdicao = Object.assign({}, livro); //clonando o objeto se for edição... pra não mexer diretamente na referência da lista
  this.indiceSelecionadoParaEdicao = indice;

  this.modalService.open(modal, { size: 'sm' });
}

addOuEditarPessoa(livro: Livro) {

  this.listAll();



  this.modalService.dismissAll();

}

deletePessoa(id: number) {
  if (confirm('Tem certeza de que deseja excluir este carro?')) {
    this.livroService.deleteLivro(id).subscribe(
      () => {
      
        this.listAll();
      },
      (error) => {
        console.error('Erro ao excluir a pessoa.', error);
      
      }
    );
  }
}

}
