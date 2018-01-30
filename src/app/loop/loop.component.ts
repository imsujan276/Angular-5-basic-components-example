import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.css']
})
export class LoopComponent implements OnInit {

	items : any[] = [
		'one',
		'two',
		'three',
		'four',
		'five'
	];


  constructor() { }

  ngOnInit() {
  }

}
