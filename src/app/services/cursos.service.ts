import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursosUrl: string = environment.url + '/schoolsystem/api/v1/courses/';
  private estudiantesUrl: string = environment.url + '/schoolsystem/api/v1/students/';

  constructor(private http: HttpClient) { }

  getCursos(){
    return this.http.get(this.cursosUrl);
  }

  getDetalleCurso(id: any){
    return this.http.get(`${this.cursosUrl}${id}`);
  }

  getEstudiantes(){
    return this.http.get(this.estudiantesUrl);
  }
  
  getDetalleEStudiante(id: any){
    return this.http.get(`${this.estudiantesUrl}${id}`);
  }

  updateEstudiante(body: any, id: any){
    return this.http.put(`${this.estudiantesUrl}${id}`,body);
  }

  deleteEstudiante(id: any){
    return this.http.delete(`${this.estudiantesUrl}${id}`);
  }

}
