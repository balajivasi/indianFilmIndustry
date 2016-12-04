import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { TeluguIndustryService } from '../telugu.service'

@Component({
	selector:'heroDetails',
	styleUrls:['./heroDetails.scss'],
	templateUrl:'./heroDetails.html'
})

export class HeroDetailsComponent implements OnInit{

	heroId:any;
	showlistOfMovies:boolean=false;
	heroDetails:any;

	constructor(
		private _router:Router,
		private _activatedRouter:ActivatedRoute,
		private _teluguIndustryService:TeluguIndustryService
	){ }

	ngOnInit(){

		this._activatedRouter
			.params
        	.map(params => this.heroId=params['heroId'])
        	.subscribe(heroId=>this.getHeroDetails())
	}

	getHeroDetails(){
		console.log(this.heroId);
		this._teluguIndustryService.getHeroDetails(this.heroId)
								   .subscribe((data)=> this.heroDetails = data)
	}
	onMovieList(){
		this.showlistOfMovies=!this.showlistOfMovies;
	}

	backtoList(){
		window.history.go(-1)
	}

}