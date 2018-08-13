import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  declarations: [],
  exports:[
    CommonModule,
    FormsModule
  ]
})
export class SharedModuleModule { }
