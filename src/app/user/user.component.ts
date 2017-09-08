import { Component,Input } from '@angular/core';

@Component({
  selector: 'user-list',
  templateUrl: 'user.component.html',
  inputs:['users']
})
export class UserComponent {
  public tittle: String;
  constructor(){
    this.tittle = "I will repersent all the list that is given to me.";
  }
  @Input() users;
  public delUser(i){
	this.users.splice(i,1);
  }
}
