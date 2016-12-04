import { Routes,RouterModule } from '@angular/router';
import { TeleuguIndustryHerosListComponent } from './telugu'

const routes:Routes=[
	{ path:'', redirectTo:'Telugu',pathMatch:'full'},
	{ path:'Telugu',component:TeleuguIndustryHerosListComponent},
	{ path:'Tamil',loadChildren:'./tamil/tamil.module'},
	{ path:'Hindi',loadChildren:'./hindi/hindi.module'},
	{ path:'**', redirectTo:'/',pathMatch:'full'}
]

export const Routing =RouterModule.forRoot(routes,{useHash:true})


export const RoutingComponents=[
	TeleuguIndustryHerosListComponent
]