import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowUserComponent } from './component-admin/pages/show-user/show-user.component';

const routes: Routes = [

  { path: 'show-user', component: ShowUserComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
