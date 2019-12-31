import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Contato } from '../models/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  contatos: Contato[];
  constructor(private http: HttpClient) { 
    this.contatos = [
      {nome: 'teste', email: 'teste@teste.com', telefone: '5469854758'}
    ]
  }

  salvar(contato: Contato){
    this.contatos.push(contato);
    let contatos = [];
    if(localStorage.getItem('contatos') === null) {
      contatos = [];
      contatos.push(contato);
      localStorage.setItem('contatos', JSON.stringify(contatos));
    } else {
      contatos = JSON.parse(localStorage.getItem('contatos'));
      contatos.push(contato); 
      localStorage.setItem('tasks', JSON.stringify(contatos));
    }

  }

  getContacts(){
      return this.contatos;
  }

  addContato(contato: Contato){
    this.contatos.push(contato);
    return false;
  }
}
