import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ListarMedicosE } from "../services/api/listarmedicosE.service";
import Swal from "sweetalert2";
import { listardoc } from "../modelos/listardoc";
@Component({
    selector: 'app-listar-medicos-E',
    templateUrl: './listarmedicosE.component.html',
    styleUrls: ['./listarmedicosE.component.css']
})


export class ListarMedicosEspecialidad implements OnInit {

    formDoctores!: FormGroup;
    doctor: listardoc = new listardoc();
    doctors = new Array();
    constructor(private listarmedicosEService: ListarMedicosE, private fb: FormBuilder) {
        //this.createFormListDoctors();
        this.formDoctores = new FormGroup({
            'especialidad': new FormControl(null, Validators.compose([Validators.required,Validators.pattern('[a-zA-Z]*')]))
        }); 

        console.log(this.formDoctores.errors);
        this.searchDoctorsEspe();
        
       

    }

    ngOnInit(): void {
    }
    get spe() {
        return this.formDoctores.get('especialidad')
    }/*
    createFormListDoctors() {

        this.formDoctores = new FormGroup({
            'especialidad': new FormControl(null, Validators.required)
        }); 
      this.formDoctores = this.fb.group({
        especialidad: ['',Validators.required],

        console.log(this.formDoctores.errors);
    }*/
    searchDoctorsEspe() {
        this.listarmedicosEService.listarmedicosEspecialidad(this.formDoctores.controls['especialidad'].value)
            .subscribe((data: any) => {
                if (data.length > 0) {
                    for (let i = 0; i < data.length; i++) {
                        var doct = {
                            nombres: data[i][7],
                            apellidos: data[i][1],
                            correo: data[i][3],
                            hour: data[i].hour
                        }
                        this.doctors.push(doct)       

                    }
                } else {
                    Swal.fire({
                        title: 'No Existe Doctores',
                        text: 'Vacio',
                        icon: 'warning'
                      })
                      this.formDoctores.reset();                    
                } 

               

            })
    }
}


