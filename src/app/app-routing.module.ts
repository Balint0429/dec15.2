import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlkatreszekComponent } from './alkatreszek/alkatreszek.component';


const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"alkatreszek", component:HomeComponent},

  {path:"", component:HomeComponent},
  {path:"**", component:HomeComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }