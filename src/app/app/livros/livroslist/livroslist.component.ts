import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Livro } from '../livro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {

  lista: Livro [] = [];
  

  constructor(){

  let livro1 = new Livro();
  livro1.autor = "Reginaldo";
  livro1.titulo = "Guia de league of legends"

  let livro2 = new Livro();
  livro2.autor = "Gabriel";
  livro2.titulo = "V FEDVEFDV"

  this.lista.push(livro1);
  this.lista.push(livro2);

}


modalService = inject(NgbModal);

abrirModal(abc : any){
  this.modalService.open(abc, {size: 'lg'});
}

addNaLista(livro: Livro){

  this.lista.push(livro);
  this.modalService.dismissAll();

}

}
