import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ZeroComponent } from './zero/zero.component';


const routes: Routes = [
  {path: '', component: ZeroComponent},
  {path: 'home', component: HomeComponent},
  {path: 'zero', component: ZeroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
