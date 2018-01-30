import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

	buttonText : string ="Change Me";

  constructor() { }

  ngOnInit() {
  }

  alertMe(){
  	alert('You have meen Alerted');
  }

  changeButtonText(){
  	this.buttonText = "Changed";
  }


  tryMe(){
  	this.buttonText = "Change Me";
  }

}
