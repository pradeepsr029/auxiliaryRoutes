import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuxiliaryRoutingModule } from './auxiliary-routing.module';
import { AuxiliaryComponent } from './auxiliary.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';


@NgModule({
  declarations: [AuxiliaryComponent, EditProfileComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    AuxiliaryRoutingModule
  ]
})
export class AuxiliaryModule { }
