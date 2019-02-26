import { Component, OnInit } from '@angular/core';
import { Observable } from  "rxjs";
import { movieDetail } from './movieDetail';
import { Router,ActivatedRoute,ParamMap }  from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { GetMovieDetailService } from './moviepreview.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-moviepreview',
  templateUrl: './moviepreview.component.html',
  styleUrls: ['./moviepreview.component.css']
})
export class MoviepreviewComponent implements OnInit {

	movieData: Observable<movieDetail>;
  public records = {
    
  };
  titleId = "";
  moviePoster = "";
  movieCover = "";
  constructor(
  	public router : Router,
  	public route : ActivatedRoute,
    public fetchDetailService : GetMovieDetailService,
    public appComp : AppComponent,
  	  	) { }


  ngOnInit() {
    this.getDetail();
  }

  getDetail(){
    this.appComp.togglePageloader(true);
    this.titleId = this.route.snapshot.params.tt;
    this.fetchDetailService.getMovie(this.titleId).subscribe(data=>{
      console.log(data);
      
       this.records = data;
       this.moviePoster = "https://image.tmdb.org/t/p/w185" + data.poster_path;
       this.movieCover = "https://image.tmdb.org/t/p/w1280" + data.backdrop_path;
       
       this.appComp.togglePageloader(false);
      // this.movieData. = data;
    });
  }
}
