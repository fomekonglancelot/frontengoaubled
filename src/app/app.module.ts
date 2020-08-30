import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AnnonceComponent } from './bodyHome/annonce/annonce.component';
import { CommentComponent } from './bodyHome/comment/comment.component';
import { FooterComponent } from './footer/footer.component';
import { BodyAnComponent } from './bodyHome/body-an/body-an.component';
import { BodyComponent } from './bodycamache/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AnnonceComponent,
    CommentComponent,
    FooterComponent,
    BodyAnComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
