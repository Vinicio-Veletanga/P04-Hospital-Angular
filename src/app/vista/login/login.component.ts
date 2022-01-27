import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ApiService } from '../../services/api/api.service';
import { LoginI } from '../../modelos/login.interface';
import { ResponseI } from 'src/app/modelos/response.interface';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    correo : new FormControl('', Validators.required),
    password : new FormControl ('', Validators.required)
  })

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  
  onLogin(form:LoginI){
    /*
    this.api.loginByEmail(form).subscribe(data => {
      console.log(form)
      let dataResponse:ResponseI = data;
      if(dataResponse.status == "ok"){
        localStorage.setItem("token",dataResponse.result.token);
        this.router.navigate(['dashboard']);
      }
      
    });
    */
    
  }

}
