import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routing,RoutingComponents } from './tamil.router';

@NgModule({
	imports:[
		CommonModule,
		Routing
	],
	declarations:[
		RoutingComponents
	],
	providers:[]
	
})
export class TamilIndustryModule{

}