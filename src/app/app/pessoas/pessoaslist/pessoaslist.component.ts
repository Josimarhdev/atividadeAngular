import { Component, inject } from '@angular/core';
import { Pessoa } from '../pessoa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss']
})
export class PessoaslistComponent {

  lista: Pessoa[] = [];

  constructor(){

    let pessoa1: Pessoa = new Pessoa();
    pessoa1.nome = 'Marcos';
    pessoa1.idade = 18;

    let pessoa2: Pessoa = new Pessoa();
    pessoa2.nome = 'Joao';
    pessoa2.idade = 18;

    let pessoa3: Pessoa = new Pessoa();
    pessoa3.nome = 'Gabriel';
    pessoa3.idade = 18;

    let pessoa4: Pessoa = new Pessoa();
    pessoa4.nome = 'Paulo';
    pessoa4.idade = 31;

    let pessoa5: Pessoa = new Pessoa();
    pessoa5.nome = 'Ricardo';
    pessoa5.idade = 31;

    let pessoa6: Pessoa = new Pessoa();
    pessoa6.nome = 'Fernanda';
    pessoa6.idade = 31;

    let pessoa7: Pessoa = new Pessoa();
    pessoa7.nome = 'Ana';
    pessoa7.idade = 31;

    let pessoa8: Pessoa = new Pessoa();
    pessoa8.nome = 'Vitor';
    pessoa8.idade = 31;

    let pessoa9: Pessoa = new Pessoa();
    pessoa9.nome = 'Leo';
    pessoa9.idade = 31;

    let pessoa10: Pessoa = new Pessoa();
    pessoa10.nome = 'Mercedes';
    pessoa10.idade = 31;

    this.lista.push(pessoa1);
    this.lista.push(pessoa2);
    this.lista.push(pessoa3);
    this.lista.push(pessoa4);
    this.lista.push(pessoa5);
    this.lista.push(pessoa6);
    this.lista.push(pessoa7);
    this.lista.push(pessoa8);
    this.lista.push(pessoa9);
    this.lista.push(pessoa10);


  }

    modalService = inject(NgbModal);

    abrirModal(abc : any){
      this.modalService.open(abc, {size: 'lg'});
    }

    addNaLista(pessoa: Pessoa){

      this.lista.push(pessoa);
      this.modalService.dismissAll();

    }

}
