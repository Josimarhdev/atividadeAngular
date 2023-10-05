import { Component } from '@angular/core';
import { Carro } from '../carro';

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

}
