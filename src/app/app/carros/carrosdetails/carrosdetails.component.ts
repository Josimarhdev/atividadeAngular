import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../../pessoas/pessoa';
import { Carro } from '../carro';

@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss']
})
export class CarrosdetailsComponent {

  roteador = inject(ActivatedRoute);
  carro!: Carro;


  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id');
    console.log(id);
  }

}
