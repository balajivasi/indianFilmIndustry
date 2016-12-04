import { Component,OnInit } from '@angular/core';
import { TeluguIndustryService } from './telugu.service'


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
		this._teluguIndustryService.getDataFromDB()
								   .subscribe(data => {
								   		this.teluguIndustryList=data[0];
								   })
	}

}