import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private tokeUrl: string = environment.url + '/schoolsystem/api/v1/oauth/';
  constructor( private http:HttpClient ) { }

  getToken(body: any){
    return this.http.post(this.tokeUrl, body);
  }
}
