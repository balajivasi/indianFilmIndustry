import { Component,OnInit } from '@angular/core';
import { TeluguIndustryService } from './telugu.service'
import { DBUrls } from '../config.dbUrls'

@Component({
	selector:'HerosList',
	styleUrls:['./teluguHerosList.scss'],
	templateUrl:'./teluguHerosList.html'
})
export class TeleuguIndustryHerosListComponent implements OnInit{

	teluguIndustryList:any;

	constructor(private _teluguIndustryService:TeluguIndustryService){
		this.teluguIndustryData();
	}

	ngOnInit(){
		
	}

	teluguIndustryData(){
		let url = DBUrls.TeluguDb;
		this._teluguIndustryService.getDataFromDB(url)
								   .subscribe(data => {
								   		this.teluguIndustryList=data[0];
								   })
	}

}