import { Component, OnInit } from '@angular/core';
import { ultraRoot } from '../../global';
import { GetmovielistService } from './getmovielist.service';
import { Movie } from './movie';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from '../../app.component';



@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

	Arr = Array;
	num:number = 10;
	movies = [];
	public records = {
		results : [],
	};
	mov4 = [];

	totalpages = 1;
	currentPagep = 1;

	private loggedIn: boolean  = false;
   	constructor(public person: ultraRoot,private myMovieService : GetmovielistService, public route: Router,public appComp :AppComponent) 
   	{
	   	this.loggedIn = this.person.isVerified();
	   	// console.log(this.loggedIn);
  	}

  	makeCover = "";
  	makeCoverSecond = "";
  	makeCoverthird = "";
  	makeCoverFourth = "";

  	ngOnInit() 
  	{
  		setTimeout(() => {
  		
  		this.getMovielist(1);
  	});
  		// console.log(this.person);

  		this.loggedIn = this.person.isVerified();
  		if(!this.loggedIn)
  		{
  			this.route.navigate(["/login"]);
  		}
	}

	getMovielist(page){
		this.appComp.togglePageloader(true);
		this.myMovieService.getData(page).subscribe(data=>{
					
					this.records.results = data.results;
					// console.log(this.records.results);
					// console.log(this.movies);
					this.totalpages = data.total_results;
					this.currentPagep = data.page;
					for(let i =0; i<20; i++)
					{
						this.movies[i] = this.records.results[i];
						let str = this.movies[i].overview.split(" ");
						let fstr = "";
						for(let i = 0; i<12 ; i++)
						{
							fstr = fstr + str[i] + " ";
						}
						this.movies[i].overview = fstr;
						this.movies[i].backdrop_path = "https://image.tmdb.org/t/p/w1280" + this.movies[i].poster_path;
						this.movies[i].poster_path = "https://image.tmdb.org/t/p/w185" + this.movies[i].poster_path;
						
					}
					this.makeCover = this.movies[9].backdrop_path;
					this.makeCoverSecond = this.movies[0].backdrop_path;
					this.makeCoverthird = this.movies[13].backdrop_path;
					this.makeCoverFourth = this.movies[5].backdrop_path;
					// for(let j=0;j<4;j++)
					// 	{
					// 		this.movies[j] = this.mov4;
					// 	}
					// console.log(this.movies);
					// console.log(this.mov4);
					// setTimeout(function(){
					// 	this.appComp.togglePageloader();
					// },2000);
					this.appComp.togglePageloader(false);
					
				});
		

	}

	showThis(i)
		{
			// console.log(i,j);
			this.movies[i].video = true;
			// console.log(this.movies[i][j+1].Response);
		};
	
	hideThis(i)
		{
			// console.log(i,j);
			this.movies[i].video = false;
			// console.log(this.movies[i][j].Response);
		};

	navDetails(id){
		this.route.navigate(["/movie-details",{tt:id}]);
	};


	changePage(pageChange){
		console.log(pageChange);
		this.getMovielist(pageChange+1);
		this.currentPagep = pageChange;
	}

}
