import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BodyservericesService } from '../services/bodyserverices.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  homeCommment:boolean=false;
  homeAnnonce:boolean= true;


 echangeBody:boolean;
 
  constructor(
    private route: Router,
    private serviceBodyComent: BodyservericesService
  ) { }

  ngOnInit(): void {
    
  }

  goComent(){
    console.log("anzeige");


  this.homeAnnonce = false;
 
  this.homeCommment =  true;
 
  
  
  }

}
