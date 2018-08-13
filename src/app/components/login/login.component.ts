import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  public viewLogin: boolean = false;
  public dataLogin: any = { usuario:'', password:''}
  public classError: boolean;
  constructor(private router: Router, private login: LoginService,
              private toast: ToastrService ) { }
  
  ngOnInit() {
    setTimeout( () => {
      this.viewLogin = true;
    }, 1000 )
    if(sessionStorage.getItem('token') != null){
      this.getLogin();
    }
  }

  formLogin(form: NgForm): void{
    let body = {
      username: form.value.usuario,
      password: '3x4m3nfr0nt'
    }
    this.login.getToken(body).subscribe( data => {
      if(typeof(data) != 'undefined'){
        sessionStorage.setItem('token',JSON.stringify(data['token']));
        this.getLogin();
        this.classError = false;
      }
    }, error => {
      this.toast.error('ERROR','Las claves ingresas no son correctas');
      console.log('error');
      this.cleanForm();
      this.classError = true;
    })
  }

  cleanForm(): void{
    this.dataLogin.usuario = '';
    this.dataLogin.password = '';
  }

  getLogin(): void{
    this.router.navigate(['/dashboard']);
  }

}
