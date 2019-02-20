import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from  "rxjs";
import { movieDetail } from './movieDetail';


@Injectable({
  providedIn: 'root'
})
export class GetMovieDetailService {

	// private _url: string = "./movies.json";
  constructor( private http: HttpClient) {
  console.log("this is movielist service") 
}

getMovie(titleId) : Observable<movieDetail>{
	console.log("called me",titleId)
	return this.http.get<movieDetail>("https://api.themoviedb.org/3/movie/" + titleId + "?api_key=0af1c5aabaf84e1c94c3e23b2eec402d&language=en-US")
}
}