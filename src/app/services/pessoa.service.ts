  import { Injectable, inject } from '@angular/core';
  import { HttpClient, HttpParams } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { Pessoa } from '../app/pessoas/pessoa';

  @Injectable({
    providedIn: 'root'
  })
  export class PessoaService {

    API: string = 'http://localhost:8080/api/pessoa';
    http = inject(HttpClient);

    constructor() { }


    listAll(): Observable<Pessoa[]> {
      return this.http.get<Pessoa[]>(this.API);
    }

    save(pessoa: Pessoa): Observable<Pessoa> {
      return this.http.post<Pessoa>(this.API, pessoa);
    }

    exemploErro(): Observable<Pessoa[]> {
      return this.http.get<Pessoa[]>(this.API + '/erro');
    }

    deletePessoa(id: number): Observable<any> {
      const url = `${this.API}/${id}`;
      return this.http.delete(url);
    }
    



    


  }