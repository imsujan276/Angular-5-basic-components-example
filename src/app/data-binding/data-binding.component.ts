import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  name : string ="Sujan";
  text : string = "random text";

  constructor() { }

  ngOnInit() {
  }

}
