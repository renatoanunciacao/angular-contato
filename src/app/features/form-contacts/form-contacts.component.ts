import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../../services/contato.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-contacts',
  templateUrl: './form-contacts.component.html',
  styleUrls: ['./form-contacts.component.scss']
})
export class FormContactsComponent implements OnInit{
  form: FormGroup;

  constructor(public contatoService: ContatoService) { 
  
  }

  ngOnInit() {
    this.form = new FormGroup({
      'mask': new FormControl()
    });
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
