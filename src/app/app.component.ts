import { Component } from '@angular/core';
import { ultraRoot } from './global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'movieListApp';
	private verified :boolean = false;
  private pageLoader :boolean;
  
	constructor(public person:ultraRoot)
	{
		this.verified = this.person.isVerified();

	}
  sideBarHidden = true;
  
	ngOnInit()
	{
    setTimeout(() => {
      this.pageLoader = false;
    });
		console.log(this.verified);
  }

  ngAfterViewInit() {

  }

  setVerfied(val)
  {
  	console.log("setVerfCalled");
  	this.verified = val;
  }

  togglesidebar()
  {
    console.log(this.sideBarHidden);
    if(this.sideBarHidden)
      {
        this.sideBarHidden = false;
      }
    else if(!this.sideBarHidden)
      {
        this.sideBarHidden = true;
      }
  }

  togglePageloader(val)
  {
    this.pageLoader = val;    
  }

  logoutTheUser()
  {
    this.person.logoutUser();
    this.verified = this.person.isVerified();
  }	
}
