import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

image:string;
im_1:string;
im_2:string;
im_3:string;

// section de comment ca marche
section_1:boolean= true;
section_2:boolean= false;
section_3:boolean= false;

  constructor() { }

  ngOnInit(): void {
    this.image='assets/images/zoya-loonohod-ZRbZq5Se3Os-unsplash.jpg';

    this.im_1="image_1";
    this.im_2="image_2";
    this.im_3="image_3";

    
  }

 

  com_1(event:any){
  
    if (event == "image_1") {

      this.image ="assets/images/photo-1577702312706-e23ff063064f.jpeg";
      this.section_1=true;
      this.section_2=false;
      this.section_3=false;
    
  
      
    } else if(event == "image_2")  {
      
      this.image ="assets/images/foto2.jpeg";
      this.section_1=false;
      this.section_2=true;
      this.section_3=false;
   
    }else if(event == "image_3")  {
      
      this.image ="assets/images/bench-accounting-MGaFENpDCsw-unsplash.jpg";

      this.section_1=false;
      this.section_2=false;
      this.section_3=true;
   
    }
    

  }



}
