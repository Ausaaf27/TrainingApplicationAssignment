import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

// const routes: Routes = []; // sets up routes constant where you define your routes
const routes: Routes = [
  { path: '',redirectTo: 'first-component', pathMatch: 'full'},
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
    { path: 'third-component', component: ThirdComponent },
];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }