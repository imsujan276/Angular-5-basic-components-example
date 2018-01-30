import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { LoopComponent } from './loop/loop.component';
import { AnimationComponent } from './animation/animation.component';
import { ApiComponent } from './api/api.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';

const appRoutes: Routes = [
	{
		path : '',
		component : HomeComponent
	},
	{
		path : 'data-binding',
		component : DataBindingComponent
	},
	{
		path : '2-way-binding',
		component : TwoWayBindingComponent
	},
	{
		path : 'event-binding',
		component : EventBindingComponent
	},
	{
		path : 'loop',
		component : LoopComponent
	},
	{
		path : 'animation',
		component : AnimationComponent
	},
	{
		path : 'api',
		component : ApiComponent
	},
	{
		path : 'form',
		component : FormsComponent
	},
	{
		path : '**',
		component : PageNotFoundComponent
	},
];

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    LoopComponent,
    AnimationComponent,
    ApiComponent,
    PageNotFoundComponent,
    HomeComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
