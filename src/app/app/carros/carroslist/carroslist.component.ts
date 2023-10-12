import { Component, inject } from '@angular/core';
import { Carro } from '../carro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {

  lista: Carro[] = [];

  carroSelecionadaParaEdicao: Carro = new Carro();
  indiceSelecionadoParaEdicao!: number;

  constructor(){

    this.listAll();

  }

  modalService = inject(NgbModal);
  carroService = inject(CarroService);

abrirModal(abc : any){
  this.modalService.open(abc, {size: 'lg'});
}

addNaLista(carro: Carro){

  this.lista.push(carro);
  this.modalService.dismissAll();

}

listAll() {

  this.carroService.listAll().subscribe({
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

  this.carroService.exemploErro().subscribe({
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
  this.carroSelecionadaParaEdicao = new Carro();

  this.modalService.open(modal, { size: 'sm' });
}

editar(modal: any, carro: Carro, indice: number) {
  this.carroSelecionadaParaEdicao = Object.assign({}, carro); //clonando o objeto se for edição... pra não mexer diretamente na referência da lista
  this.indiceSelecionadoParaEdicao = indice;

  this.modalService.open(modal, { size: 'sm' });
}

addOuEditarCarro(carro: Carro) {

  this.listAll();



  this.modalService.dismissAll();

}

deletePessoa(id: number) {
  if (confirm('Tem certeza de que deseja excluir este livro?')) {
    this.carroService.deleteCarro(id).subscribe(
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
