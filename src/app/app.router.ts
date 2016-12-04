import { Routes,RouterModule } from '@angular/router';
import { TeleuguIndustryHerosListComponent } from './telugu'
import { TamilHerosListComponent } from './tamil'
const routes:Routes=[
	{ path:'', redirectTo:'Telugu',pathMatch:'full'},
	{ path:'Telugu',component:TeleuguIndustryHerosListComponent},
	{ path:'Tamil',loadChildren:'./tamil/tamil.module'},
	//{ path:'Hindi',loadChildren:'./tamil/tamil.module#TamilIndustryModule'},
	{ path:'**', redirectTo:'/',pathMatch:'full'}
]

export const Routing =RouterModule.forRoot(routes,{useHash:true})


export const RoutingComponents=[
	TeleuguIndustryHerosListComponent,
	TamilHerosListComponent
]