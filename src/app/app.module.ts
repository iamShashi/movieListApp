import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovielistComponent } from './pages/movielist/movielist.component';

import { Router } from '@angular/router';
import { ultraRoot } from './global';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HttpClientModule } from  '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

import {NgxPaginationModule} from 'ngx-pagination';
import { MoviepreviewComponent } from './pages/moviepreview/moviepreview.component'

// const appRoutes: Routes = [
//   { path: 'crisis-center', component: CrisisListComponent },
//   { path: 'hero/:id',      component: HeroDetailComponent },
//   {
//     path: 'heroes',
//     component: HeroListComponent,
//     data: { title: 'Heroes List' }
//   },
//   { path: '',
//     redirectTo: '/heroes',
//     pathMatch: 'full'
//   },
//   { path: '**', component: PageNotFoundComponent }
// ];




@NgModule({
  declarations: [
    AppComponent,
    MovielistComponent,
    ErrorpageComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    MoviepreviewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
    }),
    NgxPaginationModule
  ],
  providers: [ultraRoot,
  SidebarComponent,
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
