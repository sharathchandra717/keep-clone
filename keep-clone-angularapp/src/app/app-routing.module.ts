import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderNavComponent } from "./header-nav/header-nav.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: 'notes',
    component: HeaderNavComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
