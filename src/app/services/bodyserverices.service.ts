import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BodyservericesService {

  private homeComm:boolean = false;
  private homeAnnon:boolean = true;
  constructor() { }

setHomeComm(inser:boolean, insert:boolean){
  this.homeComm = inser;
  this.homeAnnon = insert;
  console.log("echangedd");
  
}

get annonce(): boolean {
  console.log('annonce');
  
  return this.homeAnnon;
}

get comment(): boolean {
  console.log('comment');
  return this.homeComm;
 
  
}

}
