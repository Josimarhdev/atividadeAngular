import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livro } from '../livro';


@Component({
  selector: 'app-livrosdetails',
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.scss']
})
export class LivrosdetailsComponent {

  roteador = inject(ActivatedRoute);
  livro: Livro= new Livro();


  @Output() retorno = new EventEmitter<Livro>();
  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id');
    console.log(id);
  }

  salvar(){

    this.retorno.emit(this.livro);

  }

}
