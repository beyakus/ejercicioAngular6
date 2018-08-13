import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NofountComponent } from './components/nofount/nofount.component';
import { ValidationRouteService } from './services/validation-route.service'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { InterceptoresService } from './services/interceptores.service';
import { CursosService } from './services/cursos.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const ROUTES: Routes = [
  { path: '', loadChildren:'./modules/login/login.module#LoginModule'},
  { path: 'dashboard', loadChildren: './modules/dashboard/dashboard.module#DashboardModule',canActivate: [ValidationRouteService]},
  { path: '**', component: NofountComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NofountComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    BrowserAnimationsModule
    
  ],
  providers: [
    ValidationRouteService,
    LoginService,
    CursosService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptoresService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
