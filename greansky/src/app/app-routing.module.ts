import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'landing', component: LandingComponent},
  { path: '',   redirectTo: 'login', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: LoginComponent }  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
