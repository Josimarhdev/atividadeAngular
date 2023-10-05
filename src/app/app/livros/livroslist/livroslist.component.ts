import { Component } from '@angular/core';
import { Livro } from '../livro';

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

}
