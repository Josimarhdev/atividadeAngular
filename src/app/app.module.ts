import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaslistComponent } from './app/pessoas/pessoaslist/pessoaslist.component';
import { IndexComponent } from './app/layout/index/index.component';

import { HeaderComponent } from './app/layout/header/header.component';
import { FooterComponent } from './app/layout/footer/footer.component';
import { PessoasdetailsComponent } from './app/pessoas/pessoasdetails/pessoasdetails.component';
import { LoginComponent } from './app/sistema/login/login.component';
import { CarroslistComponent } from './app/carros/carroslist/carroslist.component';
import { CarrosdetailsComponent } from './app/carros/carrosdetails/carrosdetails.component';
import { LivroslistComponent } from './app/livros/livroslist/livroslist.component';
import { LivrosdetailsComponent } from './app/livros/livrosdetails/livrosdetails.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PessoaslistComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    PessoasdetailsComponent,
    LoginComponent,
    CarroslistComponent,
    CarrosdetailsComponent,
    LivroslistComponent,
    LivrosdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
