import { Component, OnInit } from '@angular/core';
import { ultraRoot } from '../../global';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	loginForm: FormGroup;
    submitted = false;
    formGood = true;
    show = false;
    username ="";
    userpass ="";

  public verified :boolean = false;
	constructor(public person:ultraRoot,private formBuilder: FormBuilder, private route :Router, public appCmp : AppComponent,private toastr: ToastrService)
	{
		this.verified = person.isVerified();
    console.log("here");

	}

	ngOnInit()
	{

		console.log(this.verified);
		 this.loginForm = this.formBuilder.group({
            userId: ['', Validators.required],
            pass: ['', Validators.required],
        });
     if(this.person.isVerified()){
       this.route.navigate(["movie-list"]);
     }
  }

	get f() 
  {
		// console.log(this.loginForm.controls);
	  return this.loginForm.controls; 
  }

  	onSubmit()
    {
      this.submitted = true;
      console.log(this.loginForm);

      // stop here if form is invalid
      if (this.loginForm.invalid) 
      {
        return;
      }
        
      this.username = this.loginForm.value.userId;
      this.userpass = this.loginForm.value.pass;
        

      if(this.username == "admin" && this.userpass == "admin")
      {
        console.log("Good");
      }
      else
      {
        this.toastr.error("Wrong ID or Password");
        return;
      }
        
      console.log(this.username,this.userpass);
      this.person.setValue(true,this.username);
      // alert('SUCCESS!! :-)');
      this.toastr.success("Login Succesfull","Login!!")
      this.route.navigate(["/movie-list"]);
       
      this.appCmp.setVerfied(true);
    }

    changeType()
    {
    	if(this.show)
    	{
    		this.show = false;
    	}
    	else if(!this.show)
    	{
    		this.show = true;
    	}
    }

    logout(){

    }
}
