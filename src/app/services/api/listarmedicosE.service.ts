import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { listardoc } from 'src/app/modelos/listardoc';

@Injectable({
    providedIn: 'root'
})
export class ListarMedicosE {

    private url = 'http://localhost:8080/EjerciciosRestAngular/rest/person';

    constructor(private http:HttpClient){}


    listarmedicosEspecialidad(especialidad: string){
        
        return this.http.get(`${this.url}/listar?especialidad=${especialidad}`)
        
    }
 

}