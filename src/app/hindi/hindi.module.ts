import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routing,RoutingComponents } from './hindi.router';

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
export default class HindiIndustryModule{

}