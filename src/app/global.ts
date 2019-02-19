import { Injectable } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Injectable()



export class ultraRoot {

	constructor(public route: Router){

	}


	public person = {
		userId : "",
		isVerified : false,
	};


	isVerified()
	{
		if(this.getUser())
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	setValue(val,name)
	{
		
		this.person.userId = name;
		this.person.isVerified = val;
		localStorage.setItem("movieListApp",JSON.stringify(this.person));
	}

	getUser()
	{
		if(localStorage.getItem("movieListApp"))
		{
			let user = JSON.parse(localStorage.getItem("movieListApp"));
				// console.log("Being printed by localstorage");
				if(user)
					// console.log((user));
				if(user.userId)
					return true;
				else
					return false;
		}
	}
	getUserName()
	{
		let user = JSON.parse(localStorage.getItem("movieListApp"));
		if(user.userId)
			return user.userId;
		else
			return "User";
	}

	logoutUser()
	{
		
		localStorage.removeItem("movieListApp");
		this.person.userId = "";
		this.person.isVerified = false;
		this.route.navigate(["/login"]);
		return;
	}
}


// @Injectable()
// export class Globals {
//   role: string = 'test';
// }