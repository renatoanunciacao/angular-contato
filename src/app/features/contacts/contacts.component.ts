import { Component, OnInit, Input } from '@angular/core';
import { Contato } from 'src/app/models/contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  @Input() contato: Contato;
  constructor(public contatoService: ContatoService) { }

  ngOnInit() {
  }

}
