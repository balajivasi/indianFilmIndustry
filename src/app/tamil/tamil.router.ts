import { Routes,RouterModule } from '@angular/router';
import { TamilHerosListComponent } from './tamilHerosList.component'

const routes:Routes=[
	{ 
		path:'',
		children:[
			{ 
				path:'',
				component:TamilHerosListComponent,
				pathMatch:'full'
			}
		]
	}
]

export const Routing=RouterModule.forChild(routes) 

export const RoutingComponents=[
	TamilHerosListComponent
]