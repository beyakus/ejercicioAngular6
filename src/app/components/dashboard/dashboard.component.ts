import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  
  public headetTable: Array<string> = [];
  public tbodyTable: any = [];
  public tableStudent: boolean;
  public detailStudent: any = {};
  public detailOEdit: boolean;

  constructor(private cursos: CursosService, private toast: ToastrService) { }

  ngOnInit() {
  }

  getEstudiantes():void{
    /*Descomentar para probar servicio

    this.cursos.getEstudiantes().subscribe( data => {
      if(typeof(data) != 'undefined'){
        console.log(data);
        this.tbodyTable = data;
      }
    }, error => {
      this.toast.error("ERROR",`Lo sentimos, hubo un problema con el servidor. Error ${error.status}`);
      console.error('hubo un error');
      console.log(error);
    });

    */

    this.tableStudent = true;
    this.headetTable = ['Nombre','Apellido Paterno','Apellido Materno','Detalle', 'Editar', 'Eliminar'];
    this.tbodyTable = [
      {id:"1",first_name:"Daniel", last_name:"Garcia", last_name_second:"Valdez"},
      {id:"2",first_name:"Juan", last_name:"Valdez", last_name_second:"Montes"},
      {id:"3",first_name:"Pablo", last_name:"Mendez", last_name_second:"Peña"},
      {id:"4",first_name:"Eduardo", last_name:"Tinajero", last_name_second:"Perez"}
    ]
  }

  getCursos(): void{
    this.tableStudent = false;
     /* Descomentar para probar el servicio
     
    this.cursos.getCursos().subscribe( data => {
     if(typeof(data) != 'undefined'){
       this.tbodyTable = data;
     }
    }, error => {
      this.toast.error("ERROR",`Lo sentimos, hubo un problema con el servidor. Error ${error.status}`);
      console.error(error);
    });
    
    */
    this.headetTable = ['Nombre del curso'];
    this.tbodyTable = [
      {id:"1", name:"AWS EC2"},
      {id:"2", name:"Angular 6"},
      {id:"3", name:"Django Rest Framework"}
    ];
  }

  detalleEstudiante(data: any, type:string): void{
    switch(type){
      case 'detalle':
        this.detailOEdit = true;
      break;
      case 'editar':
        this.detailOEdit = false;
      break
    }
    /*Descomentar para porbar servicios
    this.cursos.getDetalleEStudiante(data.id).subscribe( data => {
      console.log(data);
      this.detailStudent = data;
      this.detailOEdit = true;
    }, error =>{
      this.toast.error("ERROR",`Lo sentimos, hubo un problema con el servidor. Error ${error.status}`);
      console.error('Hubo un error');
      console.log(error);
    })
    */ 
    this.detailStudent = data;
  }

  actualizarEStudiante(): void{
    let body = Object.assign({}, this.detailStudent);
    delete body.id;
    let id = this.detailStudent.id;
    this.cursos.updateEstudiante(body, id).subscribe( data => {
      this.toast.success("ACTUALIZACIÓN",`Se actualizco correctamente a ${body['first_name']}`);
      console.log(data);
    }, error => {
      console.error(error);
      this.toast.error("ERROR",`Lo sentimos, hubo un problema con el servidor. Error ${error.status}`);
    })
  }

  eliminarEstudiante(data: any): void{
    console.log(data.id);
    this.cursos.deleteEstudiante(data.id).subscribe( data => {
      console.log(data);
      this.toast.success("ELIMINADO",`Se elimino correctamente a ${data['first_name']}`);
    }, error => {
      console.error(error)
      this.toast.error('ERROR',`Lo sentimos, hubo un problema con el servidor. Error ${error.status}`);
    })    
  }

}
