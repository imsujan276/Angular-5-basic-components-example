import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

	items : any = [];
	itemNum : number = 0;

	name: string ;

	editable : boolean = false;
	item : any ;

  constructor() { }

  ngOnInit() {
  }

  addItem(){
  	this.items.push(this.name);
  	this.itemNum = this.items.length;
  }

  removeItem(item){
  	this.items.pop(item);
  	this.itemNum = this.items.length;
  }

  editItem(item){
  	this.editable = true;
  }

}
