import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderNavComponent } from "./header-nav/header-nav.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AuthGuard } from "./login/auth.guard";

const routes: Routes = [
  {
    path: 'notes',
    component: HeaderNavComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  { 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
