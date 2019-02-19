import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';
import { ultraRoot } from './global';
import { Router, RouterModule } from '@angular/router';
import { of } from 'rxjs';





@Injectable()
export class LoginResolver implements Resolve<Observable<string>>{

	private loggedIn: boolean  = false;
    constructor(public person: ultraRoot, public route: Router){
    }

	public resolve()
	{
		this.loggedIn = this.person.isVerified();
  		if(!this.loggedIn)
  		{
  			this.route.navigate(["/login"]);
  			console.log("throwing you out cause of resolver")
  			return of("false");
  		}
		console.log("came to resolve")
        return of("true");
	}

}



				