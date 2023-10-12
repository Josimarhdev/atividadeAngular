import { Component, inject } from '@angular/core';
import { Pessoa } from '../pessoa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss']
})
export class PessoaslistComponent {

  lista: Pessoa[] = [];

  pessoaSelecionadaParaEdicao: Pessoa = new Pessoa();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  pessoaService = inject(PessoaService);

  constructor(){

    this.listAll();


  }



    abrirModal(abc : any){
      this.modalService.open(abc, {size: 'lg'});
    }

    addNaLista(pessoa: Pessoa){

      this.lista.push(pessoa);
      this.modalService.dismissAll();

    }

    listAll() {

      this.pessoaService.listAll().subscribe({
        next: lista => { 
          this.lista = lista;
        },
        error: erro => { 
          alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
          console.error(erro);
        }
      });
  
    }
  
    exemploErro() {
  
      this.pessoaService.exemploErro().subscribe({
        next: lista => { 
          this.lista = lista;
        },
        error: erro => { 
          alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
          console.error(erro);
        }
      });
  
    }
  
  
    adicionar(modal: any) {
      this.pessoaSelecionadaParaEdicao = new Pessoa();
  
      this.modalService.open(modal, { size: 'sm' });
    }
  
    editar(modal: any, pessoa: Pessoa, indice: number) {
      this.pessoaSelecionadaParaEdicao = Object.assign({}, pessoa); //clonando o objeto se for edição... pra não mexer diretamente na referência da lista
      this.indiceSelecionadoParaEdicao = indice;
  
      this.modalService.open(modal, { size: 'sm' });
    }
  
    addOuEditarPessoa(pessoa: Pessoa) {
  
      this.listAll();
  
      /*
  
      if (this.pessoaSelecionadaParaEdicao.id > 0) { //MODO EDITAR
        this.lista[this.indiceSelecionadoParaEdicao] = pessoa;
      } else {
        pessoa.id = 99;
        this.lista.push(pessoa);
      }
      */
  
      this.modalService.dismissAll();
  
    }

    deletePessoa(id: number) {
      if (confirm('Tem certeza de que deseja excluir esta pessoa?')) {
        this.pessoaService.deletePessoa(id).subscribe(
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
