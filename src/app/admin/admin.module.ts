import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavBarComponent } from './component-admin/nav-bar/nav-bar.component';
import { SideBarComponent } from './component-admin/side-bar/side-bar.component';
import { ShowUserComponent } from './component-admin/pages/show-user/show-user.component';
import { AddUserComponent } from './component-admin/pages/add-user/add-user.component';


@NgModule({
  declarations: [
    AdminComponent,
    NavBarComponent,
    SideBarComponent,
    ShowUserComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
