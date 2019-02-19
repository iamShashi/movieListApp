import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from  "rxjs";
import { Movielist } from './movielist';


@Injectable({
  providedIn: 'root'
})
export class GetmovielistService {

	// private _url: string = "./movies.json";
  constructor( private http: HttpClient) {
  console.log("this is movielist service") 
}

getData(page) : Observable<Movielist>{
	return this.http.get<Movielist>("https://api.themoviedb.org/3/movie/top_rated?api_key=0af1c5aabaf84e1c94c3e23b2eec402d&language=en-US&page="+page)
}
}
