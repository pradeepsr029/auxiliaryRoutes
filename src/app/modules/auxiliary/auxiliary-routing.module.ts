import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuxiliaryComponent } from './auxiliary.component';


const routes: Routes = [
  {
    path: "",
    component: AuxiliaryComponent,
    children: [
      {
        path: "",
        loadChildren: () => import('./pages/edit-profile/edit-profile.module').then(mod => mod.EditProfileModule),
      },
      {
        path: "change-password",
        loadChildren: () => import('./pages/change-password/change-password.module').then(mod => mod.ChangePasswordModule),
      },
      {
        path: "activity",
        loadChildren: () => import('./pages/activity/activity.module').then(mod => mod.ActivityModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuxiliaryRoutingModule { }
