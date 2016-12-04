import { Injectable } from '@angular/core'
import { Http,Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
//import 'rxjs/add/operator/catch'

@Injectable()
export class TeluguIndustryService{
	
	constructor(private _http:Http){

	}

	getDataFromDB(url):Observable<any>{
		return this._http.get(url)
				  .map((response:Response) => response.json().data)
				  //.catch(error => console.log('ajax service error',error))
	}

}

