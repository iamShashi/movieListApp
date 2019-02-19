import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorpageComponent } from './pages/errorpage/errorpage.component';
import { LoginComponent } from './pages/login/login.component';
import { MovielistComponent } from './pages/movielist/movielist.component';
import { MoviepreviewComponent } from './pages/moviepreview/moviepreview.component';

import { LoginResolver } from './app.resolver';



const routes : Routes = [
	{
		path:'login',
		component: LoginComponent
	},
	{
		path:'movie-list',
		component: MovielistComponent
	},
	{
		path:'',
		redirectTo:'/login',
		pathMatch: 'full'
	},
	{
		path:'movie-details/:tt',
		component: MoviepreviewComponent,
		resolve : { loginRequired : LoginResolver }
	},
	{
		path:'**',
		component: ErrorpageComponent
	}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers : [
  	LoginResolver
  ]
})
export class AppRoutingModule { }
