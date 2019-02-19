import { Component, OnInit } from '@angular/core';
import { ultraRoot } from '../../global';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	public userperson : string = "";
  constructor(private person: ultraRoot) { }

  ngOnInit() {
  	this.userperson = this.person.getUserName();
  	console.log(this.userperson);
  	console.log("eher");
  }



}
