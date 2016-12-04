import { Routes,RouterModule } from '@angular/router';
import { TeleuguIndustryHerosListComponent } from './telugu'
import { HeroDetailsComponent } from './telugu/heroDetails'

const routes:Routes=[
	{ path:'', redirectTo:'Telugu',pathMatch:'full'},
	{ 	
		path:'Telugu',
		
		children:[
			{
				path:'',
				component:TeleuguIndustryHerosListComponent,
			},
			{
				path:':heroId',
				component:HeroDetailsComponent
			}
		]
	},
	{ path:'Tamil',loadChildren:'./tamil/tamil.module'},
	{ path:'Hindi',loadChildren:'./hindi/hindi.module'},
	{ path:'**', redirectTo:'/',pathMatch:'full'}
]

export const Routing =RouterModule.forRoot(routes,{useHash:false})


export const RoutingComponents=[
	TeleuguIndustryHerosListComponent,
	HeroDetailsComponent
]