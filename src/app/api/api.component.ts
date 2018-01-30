import { Component, OnInit, Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})

@Injectable()
export class ApiComponent implements OnInit {

  private headers = new Headers({'Content-Type': 'application/json'});

	private ItemsUrl= 'https://jsonplaceholder.typicode.com/posts';


	itemList : any = [];

    constructor(private _http: HttpClient){
    	this.getItems();
    }

    getItems(){
    	return this._http.get(this.ItemsUrl)
  		.map(result => result)
    			.subscribe(data=> {
    				console.log(data);
    				this.itemList = data;
    			})

    }

  ngOnInit() {
  }

}
