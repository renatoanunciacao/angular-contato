import { Component } from '@angular/core';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-form-contacts',
  templateUrl: './form-contacts.component.html',
  styleUrls: ['./form-contacts.component.scss']
})
export class FormContactsComponent {

  constructor(public contatoService: ContatoService) { 
  
  }

 
  addContact(nome: HTMLInputElement,email: HTMLInputElement,telefone: HTMLInputElement){
    this.contatoService.addContato({
      nome: nome.value,
      email: email.value,
      telefone: telefone.value   
    });
    nome.value = '';
    email.value = '';
    telefone.value = '';
    return false;
  }
}
