import { Component, OnInit } from '@angular/core';

    import { trigger, state ,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
  		  trigger('toggleState', [
		    state('false', style({
		      backgroundColor: '#900',
		      padding: '10px',
		      transform: 'scale(1)'
		    })),
		    state('true',   style({
		      backgroundColor: '#009',
		      transition: 'scale(2.1)'
		    })),

		    transition('false => true', animate('100ms ease-in')),
		    transition('true => false', animate('100ms ease-out'))
		  ]),


		    trigger('autoAnimate', [
		      transition('* => *', [

		        query(':enter', style({ opacity: 0 }), {optional: true}),

		        query(':enter', stagger('300ms', [
		          animate('2s ease-in', keyframes([
		            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
		            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
		            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
		          ]))]), {optional: true})
		          ,
		      ])
		    ])
  ]
})


export class AnimationComponent implements OnInit {

	texts : any[] = [
		' First text',
		' Second Text',
		true
	];

	state : string = 'true';

  constructor() { 
  }

  ngOnInit() {
  }

  toggleState() {
    // 1-line if statement that toggles the value:
    this.state = this.state === 'true' ? 'false' : 'true';

  	console.log(this.state);
  }

}
