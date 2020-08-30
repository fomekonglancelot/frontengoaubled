import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './bodycamache/body/body.component';


const routes: Routes = [   { path: 'comment', component: BodyComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
