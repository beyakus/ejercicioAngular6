import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModuleModule } from '../../shared/shared-module/shared-module.module'; 

const ROUTES:Routes = [
  { path:'', component: DashboardComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModuleModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
