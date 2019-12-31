import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../../services/contato.service';
import { Contato } from '../../models/contato';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.scss']
})
export class ListContactsComponent implements OnInit {

  contatos: Contato[];

  constructor(public contatoService: ContatoService) { }

  ngOnInit() {
    this.contatos = this.contatoService.getContacts();
  }

}
