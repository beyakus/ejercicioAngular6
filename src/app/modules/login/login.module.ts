import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';
import { SharedModuleModule } from '../../shared/shared-module/shared-module.module';

const ROUTES: Routes = [
  { path:'', component: LoginComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModuleModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
