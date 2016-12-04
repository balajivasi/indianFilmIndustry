import { Routes,RouterModule } from '@angular/router';
import { HindiHerosListComponent } from './hindiHerosList.component'

const routes:Routes=[
	{ 
		path:'',
		children:[
			{ 
				path:'',
				component:HindiHerosListComponent,
				pathMatch:'full'
			}
		]
	}
]

export const Routing=RouterModule.forChild(routes) 

export const RoutingComponents=[
	HindiHerosListComponent
]