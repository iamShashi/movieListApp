import { Component, OnInit } from '@angular/core';
import { Observable } from  "rxjs";
import { movieDetail } from './movieDetail';
import { Router,ActivatedRoute,ParamMap }  from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-moviepreview',
  templateUrl: './moviepreview.component.html',
  styleUrls: ['./moviepreview.component.css']
})
export class MoviepreviewComponent implements OnInit {

	movieData: Observable<movieDetail>;

  constructor(
  	public router : Router,
  	public route : ActivatedRoute,
  	  	) { }


  ngOnInit() {
  	this.movieData = this.route.paramMap.pipe(
  		switchMap((params : ParamMap) => this.service.getMovie(params.get('tt')))
  		)
  }

}
