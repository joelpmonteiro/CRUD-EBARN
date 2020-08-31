import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppCreateTractorsComponent } from './app-create-tractors/app-create-tractors.component';
import { AppSelectedTractorsComponent } from './app-selected-tractors/app-selected-tractors.component';

const routes: Routes = [
  { path: 'createTractors', component: AppCreateTractorsComponent },
  { path: 'selectTractors', component: AppSelectedTractorsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
  ]
})
export class AppRoutingModule { }
