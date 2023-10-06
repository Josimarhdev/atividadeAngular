import { Component, inject } from '@angular/core';
import { Carro } from '../carro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {

  lista: Carro[] = [];

  constructor(){

    let carro1 = new Carro();
    carro1.nome = "Celta"
    carro1.ano = 2007;

    let carro2 = new Carro();
    carro2.nome = "Focus"
    carro2.ano = 2004;


    this.lista.push(carro1);
    this.lista.push(carro2);

  }

  modalService = inject(NgbModal);

abrirModal(abc : any){
  this.modalService.open(abc, {size: 'lg'});
}

addNaLista(carro: Carro){

  this.lista.push(carro);
  this.modalService.dismissAll();

}

}
