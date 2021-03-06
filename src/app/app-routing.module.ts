import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './finan/pages/home/home.component';

const routes: Routes = [
  {
  path: 'auth',
  loadChildren: () => import ('./auth/auth.module'). then (m => m.AuthModule)},

  {
    path: 'finan',
    loadChildren: () => import ('./finan/finan.module'). then (m => m.FinanModule)
  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
   
  exports: [RouterModule]
})
export class AppRoutingModule { }
