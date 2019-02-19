import { Component, OnInit } from '@angular/core';
import { ultraRoot } from '../../global';
import { AppComponent } from '../../app.component';
import { Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private person: ultraRoot,public appComp : AppComponent,public route: Router) { }

  ngOnInit() {
  }

  toggleSideBar(){
  	this.appComp.togglesidebar();
  }

  logout(){
  	// this.route.navigate(["/login"]);
  	this.appComp.logoutTheUser();

  }


}
