import { Injectable } from '@angular/core'
import { Http,Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
//import 'rxjs/add/operator/catch'
import { DBUrls } from '../config.dbUrls'

@Injectable()
export class TeluguIndustryService{
	
	constructor(private _http:Http){

	}

	getDataFromDB():Observable<any>{
		let url = DBUrls.TeluguDb;
		return this._http.get(url)
				  .map((response:Response) => response.json().data)
				  //.catch(error => console.log('ajax service error',error))
	}

	getHeroDetails(heroId){
		return this.getDataFromDB()
			.map((heroList)=>heroList[0].herosList.find(hero => hero.linkTo == heroId))
	}

}

