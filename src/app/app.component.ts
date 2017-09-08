import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	name="Learning Angular ,  Mukesh Pant";
	userName= "Mukesh";
	wishes= ['Ferrari Car'];
	actorList = ['Mukesh Pant'];
	actoressList = ['Deepika'];
	addWishList(d){
		this.wishes.push(d.value);
	}
	addActor(d){
		this.actorList.push(d.value);
	}
	addActoress(d){
		this.actoressList.push(d.value);
	}
  constructor(){}
}
