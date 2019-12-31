import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { DetalheComponent } from './pages/detalhe/detalhe.component';
import { HeaderComponent } from './features/header/header.component';
import { SearchComponent } from './features/search/search.component';

import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { HttpClientModule } from '@angular/common/http';

import { ContactsComponent } from './features/contacts/contacts.component';
import { ListContactsComponent } from './features/list-contacts/list-contacts.component';
import { MatDialogModule, MatInputModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatError, MatHint } from '@angular/material';
import { FormContactsComponent } from './features/form-contacts/form-contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalheComponent,
    HeaderComponent,
    SearchComponent,
    ContactsComponent,
    ListContactsComponent,
    FormContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
